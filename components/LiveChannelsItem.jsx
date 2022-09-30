import React from 'react'
import Image from 'next/image'

const LiveChannelsItem = ({img,profile_img,title,user,game}) => {
  return (
    <div className='p-2'>
        <Image src={img} />
        <div className='flex pt-2'>
            <div className='pr-2'>
            <Image src={profile_img} width='60' height='60' className='rounded-full' />

            </div>
            <div>
                <p className='text-sm font-bold'>{title}</p>
                <p className='text-sm text-gray-600'>{user}</p>
                <p className='text-sm text-gray-600'>{game}</p>
            </div>
        </div>
    </div>
  )
}

export default LiveChannelsItem