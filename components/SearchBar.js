import React, { useState } from 'react'


export default function SearchBar({ searchText }) {
    const [searchPhoto, setSearchPhoto] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        searchText(searchPhoto);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 w-3/4 px-4 mr-4" 
                    type="text" 
                    placeholder="photo"
                    onChange={event => setSearchPhoto(event.target.value)}
                />
                <input 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type='Submit'
                    name='Submit'
                />
            </form>
        </div>
    )
}
