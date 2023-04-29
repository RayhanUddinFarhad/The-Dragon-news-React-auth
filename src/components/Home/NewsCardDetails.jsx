import { Rating } from '@smastrom/react-rating';
import moment from 'moment';
import React from 'react';
import { FaBookmark, FaRegBookmark, FaRegEye, FaRegShareSquare, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '@smastrom/react-rating/style.css'

const NewsCardDetails = ({ data }) => {
    return (
        <div>
            <div className="card bg-base-100 border my-2">

                <div className='pb-3 flex justify-between bg-[#F3F3F3] p-4'>

                    <div className='flex space-x-2'>

                        <img className='w-10 rounded-full' src={data.author.img} alt="" />

                        <div>
                            <p>{data.author.name}</p>
                            <p>{moment(data.author.published_date).format('Y-MM-D')}</p>


                        </div>



                    </div>

                    <div className='flex space-x-2 text-[#706F6F] '>

                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>


                    </div>



                </div>



                <figure><img src={data.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className={data.others_info.is_trending && "badge badge-secondary"}>

                            {data.others_info.is_trending && 'Trending'}
                        </div>
                    </h2>
                    <p>

                        {data.details.length < 250 ? <> {data.details} </> : <>{data.details.slice(0, 250)}... <Link to={`/news/${data._id}`} className='btn-link'>Read More</Link></>}





                    </p>





                    <div className="flex justify-between items-center mt-4 border p-6">
                        <div className='flex  items-center space-x-3'>




                            <Rating 
                                style={{ maxWidth: 120 }}
                                value={Math.floor(data.rating?.number || 0)}
                                readOnly
                            />

                            <p className=' '>{data.rating?.number}</p>



                        </div>

                        <div className='flex items-center space-x-2 ms-auto'>


                            <FaRegEye></FaRegEye>
                            <p>{data.total_view}</p>
                        </div>

                        <div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsCardDetails;