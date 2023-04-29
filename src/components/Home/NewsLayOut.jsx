import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Header/Navbar';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Outlet } from 'react-router-dom';
import EditorInsight from './EditorInsight';

const NewsLayOut = () => {
    return (
        <div>


            <div>


                <div>


                    <Header />
                    <Navbar></Navbar>
                </div>

                <div className='grid gap-4 lg:grid-cols-6 mt-5'>



                    <div className='col-span-4'>

                        <Outlet></Outlet>

                    </div>


                    <div>


                        <RightSide></RightSide>
                    </div>









                </div>




            </div>

        </div>
    );
};

export default NewsLayOut;