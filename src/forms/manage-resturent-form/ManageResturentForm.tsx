import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenSection from "./MenSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  resturantName: z.string().nonempty("Restaurant name is required"),
  city: z.string().nonempty("City is required"),
  country: z.string().nonempty("Country is required"),
  deliveryPrice: z.coerce.number().min(0, "Delivery price must be a valid number"),
  estimatedDeliveryTime: z.coerce.number().min(0, "Estimated delivery time must be a valid number"),
  cuisines: z.array(z.string()).nonempty("Please select at least one cuisine"),
  menuItems: z.array(
    z.object({
      name: z.string().nonempty("Name is required"),
      price: z.coerce.number().min(0, "Price is required"),
    })
  ).min(1, "Please add at least one menu item"),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});

type ResturentFormData = z.infer<typeof formSchema>;

type Props = {
  resturent?: Resturant; // Make resturent optional
  onSave: (resturentFormData: FormData) => void;
  isLoading: boolean;
};

const ManageResturentForm = ({ onSave, isLoading, resturent }: Props) => {
  const form = useForm<ResturentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  useEffect(() => {
    if (!resturent) return;

    const deliveryPriceFormatted = resturent.deliveryPrice / 100;
    const menuItemsFormatted = resturent.menuItems.map((item) => ({
      ...item,
      price: item.price / 100,
    }));

    const updatedResturent = {
      ...resturent,
      deliveryPrice: deliveryPriceFormatted,
      menuItems: menuItemsFormatted,
    };

    form.reset(updatedResturent);
  }, [form, resturent]);

  const onSubmit = (formDataJson: ResturentFormData) => {
    const formData = new FormData();
    formData.append("resturantName", formDataJson.resturantName);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("deliveryPrice", (formDataJson.deliveryPrice * 100).toString());
    formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());

    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });

    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(`menuItems[${index}][price]`, (menuItem.price * 100).toString());
    });

    formData.append("imageFile", formDataJson.imageFile);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageResturentForm;
