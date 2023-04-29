import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCardDetails from './NewsCardDetails';

const NewsCard = () => {

    const news = useLoaderData()


    return (
        <div>

            {

                news && news.map(news => <NewsCardDetails key={news._id} data = {news}></NewsCardDetails> )
            }






        </div>
    );
};

export default NewsCard;