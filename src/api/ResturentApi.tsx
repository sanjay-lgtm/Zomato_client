import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetResturent = (resturentId?: string) => {
  const getResturentByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${VITE_API_BASE_URL}/api/resturent/${resturentId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get resturent");
    }

    return response.json();
  };

  const { data: resturent, isLoading, error } = useQuery(
    ["fetchResturent", resturentId],
    getResturentByIdRequest,
    {
      enabled: !!resturentId,
    }
  );
  if (error) {
    // Optionally handle the error here or log it
    console.error(error);
  }

  return { resturent, isLoading, error };
};

export const useSearchResturents = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);
    const response = await fetch(
      `${VITE_API_BASE_URL}/api/resturent/search/${city}?${params.toString()}`
    );
    if (!response.ok) {
      throw new Error("Failed to get resturent");
    }
    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchResturents", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};
