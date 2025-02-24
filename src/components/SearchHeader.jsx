import React from 'react'
import Link from 'next/link'
import SearchBox from './SearchBox'
import { RiSettings3Line } from 'react-icons/ri'
import {TbGridDots} from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full/
      p-6 items-center/
      justify-between'>
        <Link href={"/"}>
          <img
          width="120"
          height="40"
          src="https://jg-app.obs.cn-north-4.myhuaweicloud.com/prod/upload/0/jpg/CB5F18A66703ACA019EB5274D5749C76.jpg"
          />
        </Link>
      <div className="flex-1">
        <SearchBox />
      
      </div>
      <div className='hidden md:inline-flex space-x-2'>
        <RiSettings3Line
        className="header-icon"/>
        <TbGridDots 
        className="header-icon"
        />
      </div>
      <button className="bg-blue-500 
      text-white px-6 py-3 font-medium
      rounded-md hover:bg-blue-600
      hover:shadow-md
      transition-all ml-5
      ">Sign In</button>

      </div>
      <SearchHeaderOptions />

    </header>
  )
}
