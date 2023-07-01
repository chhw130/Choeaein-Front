import SearchPageContainer from "@/component/searchPage/SearchPageContainer";

export interface SearchPageParams {
  params: { keyword: string };
}

const SearchPage = () => {
  return (
    <main>
      <SearchPageContainer />
    </main>
  );
};

export default SearchPage;
