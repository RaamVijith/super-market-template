import React from 'react'
import img1 from '../../assets/imgs/banner/banner-1.png';
import img2 from '../../assets/imgs/banner/banner-2.png';
import img3 from '../../assets/imgs/banner/banner-3.png';


const Banner1 = () => {
    return (
        <>

            <div className='flex flex-col md:flex-row w-full my-10 h-[30vh] justify-center gap-3 px-[5%] md:px-[10%]'>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center'
                    style={{ backgroundImage: "url('/imgs/banner/banner-1.png')" }}
                >
                    <div className='flex items-center justify-center w-full h-full rounded-l bg-gray-500 bg-opacity-50'>
                        <span className='text-white'>Banner Content Hear</span>
                    </div>
                </div>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center'
                    style={{ backgroundImage: "url('/imgs/banner/banner-2.png')" }}
                >
                    <div className='flex items-center justify-center w-full h-full rounded-l bg-gray-500 bg-opacity-50'>
                        <span className='text-white'>Banner Content Hear</span>
                    </div>
                </div>
                <div
                    className='flex w-full md:w-1/3 h-full bg-cover bg-center'
                    style={{ backgroundImage: "url('/imgs/banner/banner-3.png')" }}
                >
                    <div className='flex items-center justify-center w-full h-full rounded-l bg-gray-500 bg-opacity-50'>
                        <span className='text-white'>Banner Content Hear</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Banner1