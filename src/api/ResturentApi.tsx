import { RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchResturents = (city?: string) => {
  const createSearchRequest = async ():Promise<RestaurantSearchResponse> => {
    const response = await fetch(
      `${VITE_API_BASE_URL}/api/resturent/search/${city}`
    );
    if (!response.ok) {
      throw new Error("Failed to get resturent");
    }
    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchResturents"],
    createSearchRequest,
    { enabled: !!city }
  );

  return{
    results,
    isLoading
  }
};
