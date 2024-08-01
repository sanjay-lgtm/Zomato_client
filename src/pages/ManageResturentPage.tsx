import { useCreateMyResturent } from "@/api/MyResturentApi";
import ManageResturentForm from "@/forms/manage-resturent-form/ManageResturentForm";

const ManageResturentPage = () => {
  const {createResturent,isLoading} = useCreateMyResturent();

  return <ManageResturentForm onSave={createResturent} isLoading={isLoading}/>;
};

export default ManageResturentPage;
