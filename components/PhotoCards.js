import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import _ from 'lodash';
import fetch from 'node-fetch';
// import Unsplash from 'unsplash-js';

export default function PhotoCards() {

    //We'll retrieve the data from unsplash api eventually
    const data = [{
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset',
        'description': 'Description'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 2',
        'description': 'Description 2'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 3',
        'description': 'Description 3'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 4',
        'description': 'Description 4'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 5',
        'description': 'Description 5'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 6',
        'description': 'Description 6'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 7',
        'description': 'Description 7'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 8',
        'description': 'Description 8'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 9',
        'description': 'Description 9'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 10',
        'description': 'Description 10'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 11',
        'description': 'Description 11'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 12',
        'description': 'Description 12'
    },
    {
        'picture': '/placeholder.jpg',
        'title': 'The Coldest Sunset 13',
        'description': 'Description 13'
    }];
    
    const [unsplashData, setUnsplashData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch('https://api.unsplash.com/search/photos?client_id={API-KEY-GOES-HERE}&query=london', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const json = await res.json();
                setUnsplashData(json);
                console.log(res);
            } catch (error) {
                console.error('Error calling getPhotoFromUnsplash:', error);
                throw error;
            }
        }
    }, []);
    return (
        <div className='grid grid-cols-3 gap4'>
            <div>
                {console.log(unsplashData)}
            </div>
            {data.map(function ({ picture, title, description }, index) {
                const individualPictureInfo = {
                    'picture': picture,
                    'title': title,
                    'description': description
                }
                return (<div key={index}> <PhotoCard photoData={individualPictureInfo} /> </div>);
            })}
        </div>
    );
}
