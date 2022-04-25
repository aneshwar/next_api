import React from 'react'
import Link from 'next/link'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function news({news}) {
if (!news) {
  return (
    <div>Loading</div>
  )
}
   
    const render = news.data.map((a) => {
        const {_id,author,urlToImage, title,publishedAt,description, url, content } = a;
        return (
            <div key={_id} className='px-1 py-2 flex-none space-y-1 font-bold italic shadow-2xl bg-gray-100'>
              <div className='flex justify-center'>
                  <Link href={`/news/${_id}`}><LazyLoadImage
      alt={urlToImage}
      height={urlToImage}
      src={urlToImage}
      width={urlToImage}
      className='h-64'/></Link>
              </div>
              
                
                <Link href={`/news/${_id}`}><p className='text-2xl line-clamp-2 text-blue-900 '>{title}</p></Link>

                <Link href={`/news/${_id}`}><p className='text-xl line-clamp-2 text-green-800'  >{description}</p></Link>
                <Link href={`/news/${_id}`}><p className='text-lg line-clamp-1 text-sky-900  '>{content}</p></Link>
            </div>
        )
    })
  return (
    <div className='grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>{render}</div>
  )
}
export async function getServerSideProps() {
    const res = await fetch('https://next-api-sable.vercel.app/api/notes1')
    const news = await res.json()
    return {
      props: {
        news
      }
    }
 }