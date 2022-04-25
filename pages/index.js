

import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function index({news}) {
    if (!news) {
      return (
        <div className='text-center bg-red-400'>Loadingm</div>
      )
    }
    const render = news.data.map((a) => {
 
        const {_id,author,urlToImage, title,publishedAt,description, url, content } = a;
     
        return ( <>
        
            <div key={_id} className='px-1 py-2 flex-none space-y-1 font-bold italic shadow-2xl justify-start bg-gray-100 text-center'>
              <div className='flex justify-center'>
             
    <Link href={`/${_id}`}><LazyLoadImage
      alt={urlToImage}
      height={urlToImage}
      src={urlToImage} // use normal <img> attributes as props
      width={urlToImage} 
      className='h-64 sm:grow'
      /></Link>
      
  </div>
                  {/* <img src={urlToImage} alt="" className='h-64 sm:grow'/> */}
              
              

                <Link href={`/${_id}`}><p className='text-2xl line-clamp-2 text-blue-900'>{title}</p></Link>

                <Link href={`/${_id}`}><p className='text-xl line-clamp-2 text-green-800' >{description}</p></Link>
                <Link href={`/${_id}`}><p className='text-lg line-clamp-1 text-sky-900 '>{content}</p></Link>
            </div>
       </> )
    })
  return (<>
   
   <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>{render}</div>
  
  </>
   
  )
}
export async function getServerSideProps() {
    const res = await fetch('https://next-api-sable.vercel.app/api/notes')
    const news = await res.json()
    return {
      props: {
        news
      }
    }
 }
