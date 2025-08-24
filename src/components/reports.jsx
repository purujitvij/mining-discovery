import Image from 'next/image'
import React from 'react'

export default function Reports({image, description}) {
  return (
    <div>
        <div className="relative inline-block rounded-lg overflow-hidden">
            <Image src={image} alt="Project 1" width={330} height={200} />
            <div className="absolute bottom-0 left-0 right-0  bg-opacity-20 bg-black-bg text-white p-4">
                <p className="text-sm">{description}</p>
            </div>
        </div>
    </div>
  )
}