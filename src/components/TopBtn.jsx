import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'

const TopBtn = () => {
  const scrollTo = useSmoothScroll()
  return (
    <div className='top-btn-container'>
      <button
        onClick={(e) => {
          e.preventDefault()
          scrollTo('Hero')
        }}
        className='top-btn'>
        <img src="/img/icon_top.svg" alt="위로 올라가는 버튼" />
      </button>

      <a href="#" className="talk-btn">
        <img src="/img/icon_talk.svg" alt="1대1 상담 버튼" />
        <p className='talk-text'>1:1 Talk</p>
      </a>
    </div>
  )
}

export default TopBtn