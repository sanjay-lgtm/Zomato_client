import { useSearchResturents } from "@/api/ResturentApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchResturents(city);

  return (
    <span>
      User searched for {city}{" "}
      <span>
        {results?.data.map((resturent) => (
          <span>
            found - {resturent.resturantName} , {resturent.city}
          </span>
        ))}
      </span>
    </span>
  );
};

export default SearchPage;
