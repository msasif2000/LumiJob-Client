import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";


interface CSearchProps {
    onSearchResult: (searchData: any[]) => void;
  }

  const CSearch: React.FC<CSearchProps> = ({ onSearchResult }) => {
    const [searchText, setSearchText] = useState('');
    const axiosPublic = useAxiosPublic();

    const handleSearch = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axiosPublic.get(`/candidate-Search?search=${searchText}`); 
            console.log("Search Result:", response.data);
            onSearchResult(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (e:any) => {
        setSearchText(e.target.value);
    };


    return (
        <div className="">
            <form>
                <div className="flex items-center justify-center p-5">
                    <div className="border-2 w-11/12 rounded-tr-lg rounded-br-lg">
                        <div className="flex">
                            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input
                                id="search"
                                name="search"
                                type="text"
                                value={searchText}
                                onChange={handleChange}
                                className="p-2 w-11/12 bg-white pl-2 text-base font-semibold outline-0"
                                placeholder="Search company, job title..."
                            />
                            <button
                                onClick={handleSearch}
                                className="bg-blue-500 px-10 py-4 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CSearch;
