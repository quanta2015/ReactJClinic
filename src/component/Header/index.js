import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'


import logo from "img/icon_logo.svg"
import './index.less'


const Header =({nav, menu})=> {

  
  const nJ = (nav)?JSON.parse(nav?.json):null
  const mJ = (menu)?JSON.parse(menu?.json).menu:[]


  return (
    <>
      <div className="g-nav">
        <a href="/">
          <img src={logo}/>
          <label>{nJ?.name}</label>
        </a>

        <div className="sp"></div>

        <div className="m-info">
          <div className="m-cont">
            <span>{nJ?.info1}</span>
          </div>
          <div className="m-date">{nJ?.info2}</div>
        </div>
      </div>
      <div className="g-menu">
        {mJ.map((item,i)=> <li key={i}>{item}</li> )}
      </div>
    </>
  )
}

export default inject('ms')(observer(Header))
