import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pageData } from "../components/searchData";

const SearchResult = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = pageData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search pages..."
        className="w-full border border-gray-300 px-4 py-2 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <ul className="mt-3 border rounded bg-white shadow-md">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li key={item.id} className="p-2 hover:bg-gray-100">
                <Link to={item.path} className="block text-blue-600">
                  <strong>{item.title}</strong>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </Link>
              </li>
            ))
          ) : (
            <li className="p-2 text-red-500">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
