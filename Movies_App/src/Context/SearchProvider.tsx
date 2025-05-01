import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apiKey } from "../Modules/API";
import axios from "axios";

const SearchContext = createContext({} as SearchOperation);

type ChildrenProps = {
children: ReactNode;
};

type Item = {
id: number;
title?: string;
name?: string;
vote_average: number;
poster_path: string;
adult?: boolean;
};

type SearchOperation = {
query: string;
setQuery: (query: string) => void;
filterItems: Item[];
selectType: "movie" | "tv";
};

const SearchProvider = ({ children }: ChildrenProps) => {
const [query, setQuery] = useState("");
const [type, setType] = useState<"movie" | "tv">("movie");
const [items, setItems] = useState<Item[]>([]);
const location = useLocation();

useEffect(() => {
    if (location.pathname.includes("/tv")) setType("tv");
    else setType("movie");
}, [location.pathname]);

useEffect(() => {
    const fetchItems = async () => {
        if (!query.trim()) {
            setItems([]); 
        return;
        }

        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&query=${query}&include_adult=false`
            );
            
            const filteredResults = response.data.results.filter((item: Item) => !item.adult);
            setItems(filteredResults);
        } catch (err) {
            console.log(`Fetching Error ${err}`);
        }
    };

    fetchItems();
}, [query, type]); 

const filterItems = items.filter((item) =>
    (item.title || item.name)?.toLowerCase().includes(query.toLowerCase())
);

return (
    <SearchContext.Provider value={{ query, setQuery, filterItems, selectType: type }}>
        {children}
    </SearchContext.Provider>
);
};

export { SearchProvider, SearchContext };
