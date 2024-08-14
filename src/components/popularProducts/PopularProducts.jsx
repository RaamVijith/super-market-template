import React from 'react'
import img1 from '../../assets/imgs/shop/product-1-1.jpg'
import img2 from '../../assets/imgs/shop/product-2-1.jpg'
import img3 from '../../assets/imgs/shop/product-3-1.jpg'
import img4 from '../../assets/imgs/shop/product-4-1.jpg'
import img5 from '../../assets/imgs/shop/product-5-1.jpg'
import img6 from '../../assets/imgs/shop/product-6-1.jpg'
import img7 from '../../assets/imgs/shop/product-7-1.jpg'
import img8 from '../../assets/imgs/shop/product-8-1.jpg'


const PopularProducts = () => {
  const products = [
    {
      id: 1,
      image: img1,
      title: 'Stylish Dress',
      price: '$49.99',
      cat:' snaks'
    },
    {
      id: 2,
      image: img2,
      title: 'Casual Shirt',
      price: '$29.99',
      cat:' snaks'

    },
    {
      id: 3,
      image: img3,
      title: 'Elegant Blouse',
      price: '$39.99',
      cat:' snaks'

    },
    {
      id: 4,
      image: img4,
      title: 'Trendy Jacket',
      price: '$79.99',
      cat:' snaks'

    },
    {
      id: 5,
      image: img1,
      title: 'Stylish Dress',
      price: '$49.99',
      cat:' snaks'
    },
    {
      id: 6,
      image: img2,
      title: 'Casual Shirt',
      price: '$29.99',
      cat:' snaks'

    },
    {
      id: 7,
      image: img3,
      title: 'Elegant Blouse',
      price: '$39.99',
      cat:' snaks'

    },
    {
      id: 8,
      image: img4,
      title: 'Trendy Jacket',
      price: '$79.99',
      cat:' snaks'

    },
   
  ];
  return (
    <div>
      
      <div class="bg-white">
      
        <div class="mx-auto max-w-2xl px-4 pb-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className='text-2xl font-semibold text-gray-800'>Popular Products</h1>

          <h2 class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((item, index) => (
              <a href="#" class="group" key={index}>
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img src={item.image} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <div>
                  <p class="mt-5 text-xs font-medium text-gray-600">{item.cat}</p>
                  <h3 class=" text-sm text-gray-900">{item.title}</h3>
                  <p class="mt-1 text-s font-medium text-gray-600">{item.cat}</p>
                  <div className='flex flex-row justify-between'>
                  <h3 class="mt-4 text-m  text-green-700">{item.price}</h3>
                  <button className="bg-gray-300 p-1 text-green-800 rounded-lg">Add to Cart</button>

                  </div>
                </div>
              </a>
            ))}


          </div>
        </div>
      </div>

    </div>
  )
}

export default PopularProducts