import React, { useState } from 'react';
import Head from 'next/head';
import Title from '../components/Title';
import PhotoCards from '../components/PhotoCards';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

export default function Home() {
  const [query, setQuery] = useState('house');

  return  (
    <div className="container mx-auto bg-gray">
      <div className="text-center">
        <Title />
        <SearchBar searchText={(text) => setQuery(text)} />
        <div className='m-6'>
          <div>
            <PhotoCards querySearch={query} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
    );
  }
