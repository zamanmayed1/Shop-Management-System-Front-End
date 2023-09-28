import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import companyimg from "../../assets/company.png"
const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white cursor-pointer p-4 border flex flex-col justify-between transition duration-200 transform hover:scale-105 hover:shadow-xl">
      <h2 className="text-lg font-semibold mb-2">{company.name}</h2>
      <p className="text-gray-700">ID: {company.id}</p>
      <p className="text-gray-700">Phone: {company.phone}</p>
      <p className="text-gray-700">Salesperson: {company.salesperson}</p>

      <div className="mt-4 flex items-center space-x-4 border-t pt-2">
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <FaEye className="mr-1" /> View
        </button>
        <button className="flex items-center text-green-600 hover:text-green-800">
          <FaEdit className="mr-1" /> Edit
        </button>
        <button className="flex items-center text-red-600 hover:text-red-800">
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
      <img
        className="opacity-10 w-12 absolute right-0 bottom-0"
        src={companyimg}
        alt=""
      />
    </div>
  );
};

export default CompanyCard;
