import React from 'react';


export default function PhotoCard({photoData}) {
    const { picture, tags, description, title_description, likes } = photoData;

    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-card-gray'>
            <img className='w-full' src={picture} alt='Sunset in the mountains' />
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>
                    {title_description}
                </div>
                <p className='text-gray-700 text-base'>
                    {description}
                </p>
            </div>
            <div className='px-6 py-4 flex '>
                <svg className='h-6 w-8 fill-current text-red-500 text-center' xmlns='http://www.w3.org/2000/svg'>
                    <path className='heroicon-ui' d='M12.76 3.76a6 6 0 018.48 8.48l-8.53 8.54a1 1 0 01-1.42 0l-8.53-8.54a6 6 0 018.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 10-5.66-5.66l-1.46 1.47a1 1 0 01-1.42 0L9.83 5.17a4 4 0 10-5.66 5.66L12 18.66l7.83-7.83z' />
                </svg>
                <p>
                    {likes}
                </p>
            </div>

            <div>
                {
                    tags.map(({title}, index) => {
                        return <span className='inline-block bg-gray-200 rounded-full px-3 py-1 mb-4 text-sm font-semibold text-gray-700 mr-2' key={index}>#{title}</span> 
                    })
                }
            </div>
        </div>
    );
}

