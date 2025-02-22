'use client'
import React from 'react'
import Link from 'next/link'
import {TbGridDots} from 'react-icons/tb'

export default function HomeHeader() {
  return (
    <header className='flex justify-end px-5 text-sm'>
        <div className="flex space-x-4">
            <Link 
                href="https://mail.google.com"
                className="hover:underline"
                target="_blank"  // 添加外部链接属性
                rel="noopener noreferrer"
            >
                Gmail
            </Link>
            <Link 
                href="https://images.google.com"  // 修正拼写错误
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                Images
            </Link>
            <button 
                className="p-2 hover:bg-gray-100 rounded-full text-4xl bg transparent"  // 添加按钮样式
                onClick={() => console.log('菜单点击')}
            >
                <TbGridDots className="text-xl" />  
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105  font-medium"
            >
                Sign in
            </button>
        </div>
    </header>
  )
}
