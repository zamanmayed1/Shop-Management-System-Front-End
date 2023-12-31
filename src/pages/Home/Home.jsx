import React from "react";
import TotalSaleCahrt from "./TotalSaleCahrt";
import TotalReturnChart from "./TotalReturnChart";
import TopFiveProduct from "./TopFiveProduct";
import {
  useGetCategoryQuery,
  useGetCustomersQuery,
  useGetProductsQuery,
} from "../../redux/features/api/apiSlice";

const Home = () => {
  const { data: products } = useGetProductsQuery();
  const { data: category } = useGetCategoryQuery();
  const { data: customers } = useGetCustomersQuery();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-50/25 shadow-sm rounded-lg p-4 mb-4">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* Total Product */}
          <div className="bg-white shadow-sm border hover:scale-105 duration-300 rounded-lg p-4 ">
            <h2 className="text-lg font-semibold mb-2">Total Product</h2>
            <p className="text-2xl font-bold text-blue-500">
              {products?.length}
            </p>
          </div>

          {/* Total Category */}
          <div className="bg-white shadow-sm border hover:scale-105 duration-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Category</h2>
            <p className="text-2xl font-bold text-blue-500">
              {category?.length}
            </p>
          </div>
          {/* Total Customer */}
          <div className="bg-white shadow-sm border hover:scale-105 duration-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Customer</h2>
            <p className="text-2xl font-bold text-blue-500">
              {customers?.length}
            </p>
          </div>
          {/* Total Sale */}
          <div className="bg-white shadow-sm border hover:scale-105 duration-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Sale</h2>
            <p className="text-2xl font-bold text-blue-500">$10,000(fk)</p>
          </div>

          {/* Total Return */}
          <div className="bg-white shadow-sm border hover:scale-105 duration-300 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Total Return</h2>
            <p className="text-2xl font-bold text-blue-500">23(fk)</p>
          </div>
        </div>
      </div>
      {/* Chart */}
      <div className="flex flex-wrap lg:grid-cols-2 gap-3 justify-center">
        <TopFiveProduct />
        <TotalSaleCahrt />
        <TotalReturnChart />
      </div>
    </div>
  );
};

export default Home;
