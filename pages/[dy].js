import React from "react";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function dy({ data }) {
    if(!data) {
        return (
            <div>Loading</div>
        )
    }
  const render = (
    <div key={data.data._id} className="p-1 md:flex sm:flex xl:flex lg:flex">
      <div className="bg-red-300">
      <LazyLoadImage 
      alt={data.data.urlToImage}
      height={data.data.urlToImage}
      src={data.data.urlToImage} 
      width={data.data.urlToImage} className="sm:h-full" />
     
      </div>
      <div className="py-2 flex flex-col space-y-2 font-bold sm:mx-3 sm:py-0 sm:justify-between lg:justify-center xl:justify-between xl:text-3xl lg:text-2xl">
        <div className="cursor-pointer text-sky-900">{data.data.title}</div>
        <div className="cursor-pointer text-green-900">
          {data.data.description}
        </div>
        <div className="cursor-pointer text-blue-900">{data.data.content}</div>
      </div>
    </div>
  );
  return (
    <>
      <div>{render}</div>
    </>
  );
}
export async function getServerSideProps(context) {
  const id = context.params.dy;
  const res = await fetch(`https://next-api-sable.vercel.app/api/notes/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
