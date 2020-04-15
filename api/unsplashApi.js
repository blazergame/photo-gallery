import React, { useState, useEffect } from 'react';
import fetch from 'node-fetch'

const info ={

}

export default async function getPhotoFromUnsplash() {
    console.log('herre');
    try {
        const res = await fetch('https://api.unsplash.com/photos/?client_id={API-KEY-GOES-HERE}',
            {
                method: 'GET'
            }
        );
        console.log(res);
    } catch (error) {
        console.error('Error calling getPhotoFromUnsplash:', error);
        throw error;
    }

}