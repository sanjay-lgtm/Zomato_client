import { useSearchResturents } from "@/api/ResturentApi";
import SearchResultsCard from "@/components/SearchResultsCard";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchResturents(city);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!results?.data || !city) {
    return <span>No Results found!</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr]">
      <div id="cuisines-list">insert cuisines here :</div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchResultsInfo total={results.pagination.total} city={city} />
        {results.data.map((resturent)=>(
          <SearchResultsCard resturent={resturent}/>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

{/* <span>
  User searched for {city}{" "}
  <span>
    {results?.data.map((resturent) => (
      <span>
        found - {resturent.resturantName} , {resturent.city}
      </span>
    ))}
  </span>
</span>; */}
