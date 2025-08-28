import React from 'react'
import "../styles/sections/hello.scss"
import { helloData } from '../util/hello'

const Hello = () => {
  return (
    <div className='inner'>
        <div className="img-wrap">
            <img src="" alt="" />
        </div>
        <div className="t-wrap">
            <p className="txt-2"></p>
            <h2 className="tit"></h2>
            <p className="txt-1"></p>
            <a href="" className="btn"></a>
        </div>
    </div>
  )
}

export default Hello