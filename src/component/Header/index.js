import React from 'react'
import { inject, observer } from 'mobx-react'


import logo from "img/icon_logo.svg"
import './index.less'


{
  "logo":"",
  "name":"BREATH CLINIC GINZA",
  "info"
}

const Header =({children})=> {
	
  return (
    <>
      <div className="g-nav">
        <a href="/">
          <img src={logo}/>
          <label>BREATH CLINIC GINZA</label>
        </a>

        <div className="sp"></div>

        <div className="m-info">
          <div className="m-cont">
            <span>03-6278-8881</span>
          </div>
          <div className="m-date">
            営業時間｜10:00 ～ 20:00 | 予約制・完全個室・不定休
          </div>
        </div>
      </div>
      <div className="g-menu">
        <li>診療メニュー</li>
        <li>当院について</li>
        <li>ご予約</li>
        <li>アクセス</li>
        <li>お問い合わせ</li>
        <li>よくあるご質問</li>
      </div>
    </>
  )
}

export default inject('ms')(observer(Header))
