import { Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useCreateMyResturent = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyResturantRequest = async (resturentFormData: FormData):Promise<Restaurant> => {
    
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${VITE_API_BASE_URL}/api/my/resturent`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: resturentFormData,
    });
    if (!response.ok) {
      throw new Error("Failed to create resturent");
    }
    return response.json();
  };
  const {
    mutate: createResturent,
    isLoading,
    isSuccess,
    error,
  } = useMutation(createMyResturantRequest);

  if (isSuccess) {
    toast.success("Rsturent created!");
  }
  if (error) {
    toast.error("unable to create resturent");
  }
  return { createResturent, isLoading };
};
