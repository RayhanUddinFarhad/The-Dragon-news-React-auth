import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../assets/1.png'
import pic2 from '../../assets/2.png'
import pi3 from '../../assets/3.png'
import { FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

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




           <div>
            <h1 className='text-left font-bold text-2xl'>Editor Insight</h1>


            <div>


                <div className="card card-compact bg-base-100  text-left">
                    <figure><img src= {pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <p className='flex items-center text-gray-500 '> <FaRegCalendar className='mr-2'/>  {moment().format('MMM D, Y')}</p>
                        
                    </div>
                </div>
                <div className="card card-compact  bg-base-100  text-left">
                    <figure><img src= {pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <p className='flex items-center text-gray-500 '> <FaRegCalendar className='mr-2'/>  {moment().format('MMM D, Y')}</p>
                        
                    </div>
                </div>
                <div className="card card-compact  bg-base-100  text-left">
                    <figure><img src= {pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <p className='flex items-center text-gray-500 '> <FaRegCalendar className='mr-2'/>  {moment().format('MMM D, Y')}</p>
                        
                    </div>
                </div>




            </div>
        </div>
            
        </div>
    );
};

export default LeftSide;