import Form  from  "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "@/components/SearchFormReset";
const SearchForm = ({query}: {query?: string}) => {

  return (
    <Form action="/" scroll={false} className="search-form">
        <input defaultValue={query} type="text" className="search-input" placeholder="Search Startup" name="query" />

<div className="flex gap-2">
  
    {query && <SearchFormReset />}
    <button type="submit" className="search-btn text-white">
        <Search className="size-5" />
    </button>
</div>
    </Form>
  )
}
export default SearchForm