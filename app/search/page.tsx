import SearchPageContainer from "@/component/searchPage/SearchPageContainer";

export interface SearchPageParams {
  params: { keyword: string };
}

const SearchPage = () => {
  return (
    <>
      <SearchPageContainer />
    </>
  );
};

export default SearchPage;
