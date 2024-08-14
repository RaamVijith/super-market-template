import React from 'react'
import img1 from '../../assets/imgs/shop/cat-1.png'
import img2 from '../../assets/imgs/shop/cat-2.png'
import img3 from '../../assets/imgs/shop/cat-3.png'
import img4 from '../../assets/imgs/shop/cat-4.png'
import img5 from '../../assets/imgs/shop/cat-5.png'
import img6 from '../../assets/imgs/shop/cat-9.png'
import img7 from '../../assets/imgs/shop/cat-12.png'
import img8 from '../../assets/imgs/shop/cat-13.png'
import img9 from '../../assets/imgs/shop/cat-14.png'
import img10 from '../../assets/imgs/shop/cat-12.png'

const products = [
    {
        id: 1,
        name: "dertigent",
        items: 14,
        image: img1,
        color: '#C3CAB7'
    },
    {
        id: 2,
        name: "Biscut",
        items: 14,
        image: img2,
        color: '#CCCABC'
    }, {
        id: 3,
        name: "milk",
        items: 14,
        image: img3,
        color: '#BBCCBE'
    }, {
        id: 4,
        name: "Roti",
        items: 14,
        image: img4,
        color: '#CABFBB'
    }, {
        id: 5,
        name: "dertigent",
        items: 14,
        image: img5,
        color: '#CCC1BB'
    }, {
        id: 6,
        name: "dertigent",
        items: 14,
        image: img6,
        color: '#CBC2CB'
    }, {
        id: 7,
        name: "dertigent",
        items: 14,
        image: img7,
        color: '#C2C9B6'
    }, {
        id: 8,
        name: "dertigent Dot",
        items: 14,
        image: img8,
        color: '#CCBFBB'
    }, {
        id: 9,
        name: "dergent",
        items: 14,
        image: img9,
        color: '#C2C9B6'
    }, {
        id: 10,
        name: "ertigent",
        items: 14,
        image: img10,
        color: '#CCBFBB'
    }, {
        id: 11,
        name: "dertigesant",
        items: 14,
        image: img1,
        color: '#C2C9B6'
    },
]

const FeaturedCategory = () => {
    return (
        <div className='flex flex-col pt-10 mx-[10%]'>
            <h1 className='text-2xl font-semibold text-gray-800'>Featured Category</h1>

            <div className=' flex flex-row gap-5 py-10  overflow-x-scroll scrollbar' style={{ scrollbarWidth: 'none' }}>

                {products.map((item, index) => (
                    <div key={index} className='h-[150px] w-[100px] min-w-[100px] flex flex-col items-center justify-center rounded-xl' style={{ backgroundColor: item.color }}>
                        <img src={item.image} className='h-2/3 w-10/12' />
                        <h1>{item.name}</h1>
                        <p>{item.items}</p>
                    </div>
                ))}


            </div>


        </div>

    )
}

export default FeaturedCategory