import React from 'react'
import LiveChannelsItem from './LiveChannelsItem'
import Live1 from '../public/assets/live/live1.jpeg'
import Live2 from '../public/assets/live/live2.jpeg'
import Live3 from '../public/assets/live/live3.jpeg'
import Live4 from '../public/assets/live/live4.jpeg'
import Live5 from '../public/assets/live/live5.jpeg'
import Live6 from '../public/assets/live/live6.jpeg'
import Live7 from '../public/assets/live/live7.jpeg'
import Live8 from '../public/assets/live/live8.jpeg'
import Live9 from '../public/assets/live/live9.jpeg'
import Live10 from '../public/assets/live/live10.jpeg'

const LiveChannels = () => {
  return (
    <div id='live' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
            <span className='text-[#9147ff]'>Live Channels</span> We Think you'll Like
        </h2>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 py-2'>
            <LiveChannelsItem 
             img={Live1}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live2}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live3}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live4}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live5}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live6}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live7}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live8}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live9}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
            <LiveChannelsItem 
             img={Live10}
             profile_img='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
             title='Lorem Ipsum'
             user='Natt'
             game='Ready'
            />
        </div>
    </div>
  )
}

export default LiveChannels