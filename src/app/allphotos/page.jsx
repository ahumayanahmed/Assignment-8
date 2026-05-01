import PhotoCard from '@/component/PhotoCard';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Allpage = async() => {
    const res = await fetch('http://localhost:3000/data.json')
    const photos = await res.json()
    return (

        <div className='grid grid-cols-4 gap-5 mt-10'>
            {
                photos.map(photo=> <PhotoCard key={photo.id} photo={photo}/>)
            }

        </div>
        
           

        
    );
};

export default Allpage;