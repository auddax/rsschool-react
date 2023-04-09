import { createContext } from 'react';
import { SearchContextType } from 'types/interfaces';

const SearchContext = createContext<SearchContextType | null>(null);

export default SearchContext;
