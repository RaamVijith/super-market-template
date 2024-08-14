import React from 'react'
import img1 from '../../assets/imgs/banner/banner-16.png';
import img2 from '../../assets/imgs/banner/banner-17.png';
import img3 from '../../assets/imgs/banner/banner-18.png';


const Banner2 = () => {
    return (
        <>

            <div className='flex flex-col md:flex-row s w-full my-10 h-[20vh] justify-center gap-3 px-[5%] md:px-[10%] '>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center rounded-l'
                    style={{ backgroundImage: "url('/imgs/banner/banner-16.png')" }}
                >
                    <div className='flex flex-col justify-center items-left pl-[40%] text-left font-semibold w-full h-full rounded-l'>
                        <span className='text-gray-700 text-l'>Everyday Fresh with Our Products</span>
                        <span className='text-gray-500 text-xs'>Banner Content Hear</span>

                    </div>
                </div>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center rounded-l'
                    style={{ backgroundImage: "url('/imgs/banner/banner-17.png')" }}
                >
                    <div className='flex flex-col justify-center items-left pl-[40%] text-left font-semibold w-full h-full rounded-l'>
                        <span className='text-gray-700 text-l'>Everyday Fresh with Our Products</span>
                        <span className='text-gray-500 text-xs'>Banner Content Hear</span>

                    </div>
                </div>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center rounded-l'
                    style={{ backgroundImage: "url('/imgs/banner/banner-18.png')" }}
                >
                    <div className='flex flex-col justify-center items-left pl-[40%] text-left font-semibold w-full h-full rounded-l'>
                        <span className='text-gray-700 text-l'>Everyday Fresh with Our Products</span>
                        <span className='text-gray-500 text-xs'>Banner Content Hear</span>

                    </div>
                </div>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center rounded-l'
                    style={{ backgroundImage: "url('/imgs/banner/banner-19.png')" }}
                >
                    <div className='flex flex-col justify-center items-left pl-[40%] text-left font-semibold w-full h-full rounded-l'>
                        <span className='text-gray-700 text-l'>Everyday Fresh with Our Products</span>
                        <span className='text-gray-500 text-xs'>Banner Content Hear</span>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner2