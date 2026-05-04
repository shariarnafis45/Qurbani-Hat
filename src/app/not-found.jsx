import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center'>
            <h2 className='text-8xl font-bold'>404</h2>
            <p className='font-semibold text-2xl'>Page Not Found</p>
            <Link href={"/"} className="btn bg-[#2A3D2D] text-white mt-4">
            <button className='cursor-pointer'>Back To Home</button>
          </Link>
        </div>
    );
};

export default NotFoundPage;