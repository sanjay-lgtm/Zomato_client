import {
  useCreateMyResturent,
  useGetMyResturent,
  useUpdateMyResturent,
} from "@/api/MyResturentApi";
import ManageResturentForm from "@/forms/manage-resturent-form/ManageResturentForm";

const defaultResturent = {
  // Define default values for the resturent
  resturantName: "",
  city: "",
  country: "",
  deliveryPrice: 0,
  estimatedDeliveryTime: 0,
  cuisines: [],
  menuItems: [],
  imageFile: new File([], ""),
};
const ManageResturentPage = () => {
  const { createResturent, isLoading: isCreateLoading } =
    useCreateMyResturent();

  const { resturent, isLoading: isFetchingResturent } = useGetMyResturent();
  const { updateResturent, isLoading: isUpdateLoading } =
    useUpdateMyResturent();

  const isEditing = !!resturent;

  if (isFetchingResturent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {resturent ? (
        <ManageResturentForm
          resturent={resturent}
          onSave={isEditing ? updateResturent : createResturent}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      ) : (
        <div>No restaurant data available</div>
      )}
    </>
  );
};

export default ManageResturentPage;
