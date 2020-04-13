import React from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoCards() {
    return (
        <div className='grid grid-rows-2 grid-cols-4 grid-flow-col gap-4'>
            <div className='mx-8'>
                <PhotoCard />
            </div>
            <div className='mx-8'>
                <PhotoCard />
            </div>
            <div className='mx-8'>
                <PhotoCard />
            </div>
            <div className='mx-8'>
                <PhotoCard />
            </div>
            <div className='mx-8'>
                <PhotoCard />
            </div>
            <div className='mx-8'>
                <PhotoCard />
            </div>
            <div className='mx-8'>
                <PhotoCard />
            </div>

        </div>        
    );
}
