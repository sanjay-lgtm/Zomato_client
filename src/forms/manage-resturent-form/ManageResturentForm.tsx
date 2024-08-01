import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";

const formSchema = z.object({
  resturantName: z.string({
    required_error: "restaurentName is required",
  }),
  city: z.string({
    required_error: "city is required",
  }),
  country: z.string({
    required_error: "country is required",
  }),
  deliveryPrice: z.coerce.number({
    required_error: "deliveryPrice is required",
    invalid_type_error: "must be a valid number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "estimatedDeliveryTime is required",
    invalid_type_error: "must be a valid number",
  }),
  cuisines: z.array(z.string()).nonempty({
    message: "please seelect at least one item",
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "image is required" }),
});

type resturentFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (resturentFormData: FormData) => void;
  isLoading: boolean;
};

const ManageResturentForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<resturentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (formDataJson: resturentFormData) => {

  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} 
      className="space-y-8 bg-gray-50 rounded-lg">
        <DetailsSection/>
        <Separator/>
        <CuisinesSection/>
      </form>
    </Form>
  );
};

export default ManageResturentForm;
