import { createContext } from "react";

interface SearchContextState {
  searchQuery: string;
  textInput: React.MutableRefObject<HTMLInputElement | null>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchTags: (tag: string) => void;
}

const SearchContext = createContext<SearchContextState | null>(null);

export default SearchContext;
