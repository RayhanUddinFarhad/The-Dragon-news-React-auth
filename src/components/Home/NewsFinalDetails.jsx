import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from './EditorInsight';

const NewsFinalDetails = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>


            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={news.thumbnail_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.details}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/category/${news.category_id}`}>
                            <button className="btn-primary flex items-center">All news in this categories

                                <FaArrowRight className='ml-2'></FaArrowRight>


                            </button>

                        </Link>
                    </div>
                </div>
            </div>


            <EditorInsight></EditorInsight>






        </div>
    );
};

export default NewsFinalDetails;