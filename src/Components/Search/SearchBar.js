// import { useState } from "react";

// import { FiSearch } from "react-icons/fi";
// import { useHistory } from "react-router-dom";

// function SearchBar() {
//   const [query, setQuery] = useState("");
//   const history = useHistory();

//   function handleSearch(e) {
//     e.preventDefault();
//     if (query.trim() !== "") {
//       history.push(`/search?q=${encodeURIComponent(query.trim())}`);
//     }
//   }

//   return (
// <form onSubmit={handleSearch} className="relative">
//   <input
//     type="text"
//     placeholder="Search for items..."
//     value={query}
//     onChange={(e) => setQuery(e.target.value)}
//     className="border-2 border-gray-200 rounded-md px-4 py-2 w-full focus:outline-none focus:border-indigo-500"
//   />
//   <button
//     type="submit"
//     className="absolute top-0 right-0 h-full px-3 py-2 text-gray-600"
//   >
//     <FiSearch />
//   </button>
// </form>
// <h3>hello</h3>
//   );
// }

// export default SearchBar;
