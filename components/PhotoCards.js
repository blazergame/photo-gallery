import React, { useState, useEffect } from 'react';
import PhotoCard from './PhotoCard';
import fetch from 'node-fetch';

export default function PhotoCards({querySearch}) {
    
    const [unsplashData, setUnsplashData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    let api = `https://api.unsplash.com/search/photos?query=${querySearch}&client_id=${process.env.NEXT_STATIC_UNSPLASH_API_KEY}`;

    useEffect(() => {
        async function fetchData() {
            try {          
                const res = await fetch(api);
                const json = await res.json();
                setUnsplashData(json.results);
            } catch (error) {
                console.error('Error calling Unsplash API:', error);
                throw error;
            }
        }
        fetchData();
    }, [querySearch]);

    return (
        <div className='grid grid-cols-3 row-gap-16'>
            {isLoading ? 
                <div>
                    Loading...
                </div> :

            unsplashData.map(function ({ id,  urls: { regular } , description, tags, alt_description, likes }) {
                const individualPictureInfo = {
                    'picture': regular,
                    'tags': tags,
                    'description': description,
                    'title_description': alt_description,
                    'likes': likes
                }
                return (<div key={id}> <PhotoCard photoData={individualPictureInfo} /> </div>);
            })}
        </div>
    );
}
