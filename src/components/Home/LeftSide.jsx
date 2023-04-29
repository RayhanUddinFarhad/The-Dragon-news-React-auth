import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {


    const [category , setCategory] = useState([])

    useEffect (() => {


        fetch (`https://dragon-news-server-rayhanuddinfarhad.vercel.app/category`)
        .then (res => res.json())
        .then (data => setCategory (data))
    }, [])



    return (
        <div>

           <h2 className='font-bold text-xl text-left'>All Categories</h2>

           <div className='mt-2 text-left text-[#9F9F9F] space-y-5'>
           {

            category.map (category => <Link key={category.id}  to={`/category/${category.id}`}>
            <p className='my-3'>  { category && category.name} </p>
            
            </Link> )
           }



           </div>
            
        </div>
    );
};

export default LeftSide;