import React from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment/moment';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className=''>

            <div className='flex justify-center '>
                <div className='space-y-3'>

                    <img className='max-w-full' src={logo} alt="" />
                    <p>Journalism Without Fear or Favour</p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>

                </div>




            </div>


            <div className='flex my-8'>

                <button className='btn-primary'>Latest</button>
                <Marquee className='font-bold bg-[#F3F3F3]'>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...                </Marquee>
            </div>






        </div>
    );
};

export default Header;