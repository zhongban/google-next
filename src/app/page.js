import React from 'react'
import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import Image from 'next/image'


export default function page() {
  return (
    <>
      <HomeHeader />

      <div className="w-full flex justify-center mt-24"> {/* 添加宽度和水平居中 */}
        <div className="flex flex-col items-center"> {/* 嵌套容器 */}
          <Image 
            width={300}
            height={100}
            src="https://jg-app.obs.cn-north-4.myhuaweicloud.com/prod/upload/0/jpg/CB5F18A66703ACA019EB5274D5749C76.jpg"
            alt="Logo"
            className="max-w-full" // 添加响应式宽度限制
          />
        </div>
      </div>

      <HomeSearch />
    </>
  )
}
