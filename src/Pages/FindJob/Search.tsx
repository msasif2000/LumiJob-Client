import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search Term:", searchTerm);
    console.log("Selected Category:", category);
    // You can perform your filtering or fetching logic based on the searchTerm and category
  };
  return (
    <div className="flex justify-center px-2 lg:px-12">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search Jobs"
          className="w-full border py-2 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Dropdown */}
        <select
          className="w-full border py-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="technology">Technology</option>
          <option value="marketing">Marketing</option>
          <option value="finance">Finance</option>
          {/* Add more options as needed */}
        </select>

        {/* Search Button */}
        <button
          className="w-full bg-blue-500 text-white py-2 px-8 rounded"
          onClick={handleSearch}
        >
          Find Job
        </button>
      </div>
    </div>
  );
};

export default Search;
