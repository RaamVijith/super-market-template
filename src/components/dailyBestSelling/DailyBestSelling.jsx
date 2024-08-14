import React from "react";
import img1 from '../../assets/imgs/shop/product-5-1.jpg'
import img2 from '../../assets/imgs/shop/product-6-1.jpg'
import img3 from '../../assets/imgs/shop/product-7-1.jpg'
import img4 from '../../assets/imgs/shop/product-8-1.jpg'
import img5 from '../../assets/imgs/shop/product-8-1.jpg'
import img6 from '../../assets/imgs/shop/product-6-1.jpg'
import img7 from '../../assets/imgs/shop/product-7-1.jpg'
import img8 from '../../assets/imgs/shop/product-8-1.jpg'

const DailyBestSelling = () => {
  return (
    <div className="flex h-[400px] flex-row md:flex-row s w-full my-10  justify-between gap-3 px-[5%] md:px-[10%]  ">
      <div
        className="flex w-1/3 bg-slate-400 md:w-1/3 bg-cover bg-center rounded-l "
        style={{ backgroundImage: "url('/imgs/banner/banner-4.png')" }}
      >
        <div className="flex flex-col justify-center items-left pl-[40%] text-left font-semibold w-full h-full rounded-l">
          <span className="text-gray-700 text-l">
            Everyday Fresh with Our Products
          </span>
          <span className="text-gray-500 text-xs">Banner Content Hear</span>
        </div>
      </div>

      
      <div className=" w-2/3 flex flex-row">
        <div
          className=" flex flex-row gap-5 py-10  overflow-x-scroll scrollbar items-center justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="h-full w-[300px] min-w-[100px] flex flex-col items-center justify-center rounded-xl ">
            <img
              src={img1}
              className="h-2/3 w-10/12 pb-5"
            />
                        <p>Healthy Food</p>

            <h1 className="pb-5">Daily Rosemerry Mix</h1>
            <div className="bg-green-800 text-white p-3 rounded-lg">Add to Card</div>
          </div>
        </div>

        <div
          className=" flex flex-row gap-5 py-10  overflow-x-scroll scrollbar items-center justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="h-full w-[300px] min-w-[100px] flex flex-col items-center justify-center rounded-xl ">
            <img
              src={img2}
              className="h-2/3 w-10/12 pb-5"
            />
                        <p>Healthy Food</p>

            <h1 className="pb-5">Daily Rosemerry Mix</h1>
            <div className="bg-green-800 text-white p-3 rounded-lg">Add to Card</div>
          </div>
        </div>

        <div
          className=" flex flex-row gap-5 py-10  overflow-x-scroll scrollbar items-center justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="h-full w-[300px] min-w-[100px] flex flex-col items-center justify-center rounded-xl ">
            <img
              src={img3}
              className="h-2/3 w-10/12 pb-5"
            />
                        <p>Healthy Food</p>

            <h1 className="pb-5">Daily Rosemerry Mix</h1>
            <div className="bg-green-800 text-white p-3 rounded-lg">Add to Card</div>
          </div>
        </div>

        <div
          className=" flex flex-row gap-5 py-10  overflow-x-scroll scrollbar items-center justify-center"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="h-full w-[300px] min-w-[100px] flex flex-col items-center justify-center rounded-xl ">
            <img
              src={img4}
              className="h-2/3 w-10/12 pb-5"
            />
                        <p>Healthy Food</p>

            <h1 className="pb-5">Daily Rosemerry Mix</h1>
            <div className="bg-green-800 text-white p-3 rounded-lg">Add to Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyBestSelling;
