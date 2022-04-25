import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function id({data}) {
   if (!data) {
       return (
           <div>Loading</div>
       )
   }
    const {_id, author, title, description, url, urlToImage,publishedAt,content } = data.data;
  
  return (
   <div className='md:grid grid-flow-row-dense grid-cols-2 bg-yellow-200 gap-x-2 pb-1 lg:text-white lg:flex lg:flex-col lg:px-10 lg:bg-white'>
       <div className='xl:-my-2 xl:flex xl:justify-center'>
       <LazyLoadImage
      alt={urlToImage}
      height={urlToImage}
      src={urlToImage}
      width={urlToImage}
      className='md:h-full xl:m-auto'/>
          
       </div>
       <div className='bg-yellow-200 px-1'>
       <div className='flex-none justify-around space-y-2 bg-yellow-200 font-bold'>
            <p className='text-2xl text-green-900'>{title}</p>
            <p className='text-xl text-red-900'>{description}</p>
            <p className='text-lg text-sky-900'>{content}</p>
       </div>
       <div className='flex justify-between my-3'>
           <p className='bg-green-400 px-2 cursor-pointer rounded-full'>{author}</p>
           <p className='bg-yellow-500 px-2 cursor-pointer rounded-full'>{publishedAt}</p>
       </div>
      </div>


   </div>
  )
}
export async function getServerSideProps(context) {
    const id = context.query.id
   
    const res = await fetch(`https://next-api-sable.vercel.app/api/notes1/${id}`)
    const data = await res.json()
    return {
        props: {
            data
        }
    }
}