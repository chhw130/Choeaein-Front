import SearchPageContainer from "@/component/searchPage/SearchPageContainer";

export interface SearchPageParams {
  params: { keyword: string };
}

const SearchPage = ({ params }: SearchPageParams) => {
  return (
    <>
      <SearchPageContainer params={params} />
    </>
  );
};

export default SearchPage;
