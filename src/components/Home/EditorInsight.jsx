import React from 'react';
import pic1 from '../../assets/editorsInsight1.png'
import pic2 from '../../assets/editorsInsight2.png'
import pic3 from '../../assets/editorsInsight3.png'
import { FaCalendar, FaRegCalendar } from 'react-icons/fa';
import moment from 'moment';

const EditorInsight = () => {
    return (
        <div>
            <h1 className='text-left font-bold text-2xl'>Editor Insight</h1>


            <div className='grid lg:grid-cols-3 gap-20'>


                <div className="card card-compact w-96 bg-base-100 shadow-xl text-left">
                    <figure><img src= {pic1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                        <p className='flex items-center text-gray-500 '> <FaRegCalendar className='mr-2'/>  {moment().format('MMM D, Y')}</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl text-left">
                    <figure><img src= {pic2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                        <p className='flex items-center text-gray-500 '> <FaRegCalendar className='mr-2'/>  {moment().format('MMM D, Y')}</p>
                        
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl text-left">
                    <figure><img src= {pic3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">21 The Most Stylish Wedding Guest Dresses For Spring</h2>
                        <p className='flex items-center text-gray-500 '> <FaRegCalendar className='mr-2'/>  {moment().format('MMM D, Y')}</p>
                        
                    </div>
                </div>




            </div>
        </div>
    );
};

export default EditorInsight;