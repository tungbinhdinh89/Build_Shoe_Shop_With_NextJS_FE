import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";
// import { useRouter } from "next/router";

const Category = () => {
  const productList = Array.from(Array(6).keys());

  //   const router = useRouter();
  //   const { pid } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
        {/* Products grid start  */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0
        ">
          {productList.map((product, index) => {
            return <ProductCard key={index} />;
          })}
        </div>
        {/* Products grid end  */}
      </Wrapper>
    </div>
  );
};

export default Category;
