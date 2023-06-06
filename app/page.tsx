"use client"

import Image from 'next/image'
import makeHeart from  "./heart.js"
import { useEffect } from 'react'

export default function Home() {
  const now = new Date()
  const start = new Date('2023-03-07')
  const days = Math.ceil((now.getTime() - start.getTime()) / 1000 / 60 / 60 / 24)
  useEffect(() => {
    const element = document.getElementById('heart')

    const heart = makeHeart(element)
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="heart">
        <div className="fixed bottom-10 right-10 text-white font-mono" title={`从${start.toDateString()}`}>
          <span>我们在一起的第</span>
          <span className="font-bold text-6xl">{days}</span>
          <span>天</span>
        </div>
      </div>
    </main>
  )
}
