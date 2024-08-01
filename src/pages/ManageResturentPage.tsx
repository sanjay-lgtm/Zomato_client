import {
  useCreateMyResturent,
  useGetMyResturent,
  useUpdateMyResturent,
} from "@/api/MyResturentApi";
import ManageResturentForm from "@/forms/manage-resturent-form/ManageResturentForm";

const ManageResturentPage = () => {
  const { createResturent, isLoading: isCreateLoading } = useCreateMyResturent();
  const { resturent, isLoading: isFetchingResturent } = useGetMyResturent();
  const { updateResturent, isLoading: isUpdateLoading } = useUpdateMyResturent();

  const isEditing = !!resturent;

  if (isFetchingResturent) {
    return <div>Loading...</div>;
  }

  return (
    <ManageResturentForm
      resturent={resturent}
      onSave={isEditing ? updateResturent : createResturent}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageResturentPage;
