"use client";
import SearchPageContainer from "@/component/template/SearchTemplate";

export interface SearchPageParams {
  params: { keyword: string };
}

const SearchPage = () => {
  return <SearchPageContainer />;
};

export default SearchPage;
