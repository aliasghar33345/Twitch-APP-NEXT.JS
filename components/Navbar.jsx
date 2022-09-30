import React from 'react'
import Logo from '../public/assets/logo.png'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { useSession, signIn, signOut } from "next-auth/react"


function classNames(...classes){
  return classes.filter(Boolean).join('');
}

const Navbar = () => {

  const [nav,setnav] = useState();
  const handleNav = () =>{
    setnav(!nav)
  }
  const { data: session } = useSession()


  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
       {/* Left Side */}
       <div className='flex grow items-center justify-start'>
        <Link href="/">
           <a className='flex'>
             <Image src={Logo}  width='36' height='36' className='cursor-pointer z-10'/>
           </a>
        </Link>
          <p className='p-4'>Browers</p>
         <div className='p-4'>
         <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            
            <BsThreeDotsVertical
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y rounded-md text-[#fff] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-[#fff]' : 'text-[#fff]'
                    } group flex text-[#fff] w-full items-center rounded-md  text-sm`}
                  >
                    Account Setting
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
            <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-[#fff]' : 'text-[#fff]'
                    } group flex text-[#fff] w-full items-center rounded-md  text-sm`}
                  >
                    Support
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
            <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-[#fff]' : 'text-[#fff]'
                    } group flex text-[#fff] w-full items-center rounded-md  text-sm`}
                  >
                    License
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
          </div> 
       </div>
       {/* Middle Side */}
       <div className='hidden md:flex grow-[2] items-center justify-center'>
        <div className='bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl'>
          <div>
            <input type="text" placeholder='Search'  className='bg-transparent border-none text-white focus:outline-none'/>
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
       </div>
       {/* Right Side  */}

        <div className='hidden md:flex grow items-center justify-end'>
          {
          
          session ? <div>
           
           <Link href='/account'>
               <div>
                <p className='pr-4 cursor-pointer'>
                  Welcome, {session.user.name}
                </p>
               </div>
             </Link>
             <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

            <Image src={session.user.image} width='45' height='45' className='rounded-full flex justify-center'/> 
           
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y rounded-md text-[#fff] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
            
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href='/account'
                    className={`${
                      active ? ' text-[#fff]' : 'text-[#fff]'
                    } group flex text-[#fff] w-full items-center rounded-md  text-sm`}
                  >
                    Account
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className="px-1 py-1">
            <Menu.Item>
                {({ active }) => (
                  <p
                  onClick={()=>signOut()}
                    className={`${
                      active ? ' text-[#fff]' : 'text-[#fff]'
                    } group flex text-[#fff] w-full items-center rounded-md  text-sm`}
                  >
                    Logout
                  </p>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
          </div> :
          
          <div className='flex items-center'>
             <Link href='/account'>
               <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff] mr-2'>Account</button>
             </Link>
             <BsPerson size={30}/>
          </div>
          }
        </div>
{/* hamburger menu */}

<div onClick={handleNav} className='block md:hidden z-10 cursor-point'>
  {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
  
</div>

{/* Mobile Menu */}


<div className={
  nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300' :
  'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
}>
  <ul className='text-center text-[#fff]'>
    <li  onClick={()=>setNav(false)}  className='p-4 text-3xl font-bold'>
      <Link  href='/'>Home</Link>
    </li>
    <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
      <Link href='/'>Live Channels</Link>
    </li>
    <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
      <Link href='/'>Top Categories</Link>
    </li>
    <li onClick={()=>setNav(false)} className='p-4 text-3xl font-bold'>
      <Link href='/account'>Account</Link>
    </li>
  </ul>
</div>


    </div>




  )
}

export default Navbar