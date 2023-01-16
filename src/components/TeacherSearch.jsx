import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getTeachers } from "../features/teacher/teacherSlice";

function TeacherSearch() {

    ///////////// teacher
  const [searchTerm, setSearchTerm] = useState("");
  const teachers= useSelector(getTeachers)
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com" },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="mt-8">
      <div>
        <div className="container mx-auto px-4 sm:px-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             
              required
            />
          </div>

          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                {filteredData.length > 0 ? (
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          teacher
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((item) => (
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <p classNameName="text-xl">{item.name}</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className=" flex items-center justify-center">
                  <p >no user found...</p>
                  </div>
                  
                )}
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default TeacherSearch;