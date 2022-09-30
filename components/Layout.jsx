import React from 'react'
import SideMenu from './SideMenu'
import Main from './Main'

export const Layout = () => {
  return (
    <div className='pt-[60px] flex w-full'>
        <SideMenu />
        <Main />
    </div>
  )
}
