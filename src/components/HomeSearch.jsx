'use client'  // 修正拼写错误，注意中间的空格
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'



export default function HomeSearch() {
    const router = useRouter() // 获取路由器实例
    const [input,setInput] = useState('') // 现在可以正常使用 useState
    const [randomSratchLoading, setRandomSratchLoading] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        if(!input.trim()) return
        router.push(`/search/web?searchTerm=${input}`)
        
    }
    async function randomSearch() {
      try {
        setRandomSratchLoading(true)
        
        // 添加 1 秒延迟
        await new Promise(resolve => setTimeout(resolve, 1000))

        const words = ['apple', 'banana', 'coffee', 'developer', 'example'];
        const randomWord = words[Math.floor(Math.random() * words.length)];
        router.push(`/search/web?searchTerm=${randomWord}`)
      } catch (error) {
        console.error('获取随机词失败:', error)
      } finally {
        setRandomSratchLoading(false) // 确保始终关闭 loading
      }
    }
  
  return (
    <div>
      <form
      onSubmit={handleSubmit}
      className='flex w-full mt-5 mx-auto max-w-[90%]
      border border-gray-200 px-5 py-3
      rounded-full hover:shadow-md transition-shadow
      sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch className="text-xl text-gray-500
        mr-3"/>
        <input 
        type="text" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='flex-grow focus:outline-none'/>
        <BsFillMicFill className='text-lg'/>
        </form>
        <div className='flex items-center space-y-2
        sm:space-y-0 sm:space-x-4 justify-center flex-row mt-8'>
            <button onClick={handleSubmit}
            className="btn">Google Search</button>
            <button onClick={randomSearch}
            className="btn"
            disabled={randomSratchLoading}
            >
              {randomSratchLoading ? (<img src='window.svg' alt="loading" />) : ("I'm Feeling Lucky")}
              </button>

        </div>
    </div>
  )
}
