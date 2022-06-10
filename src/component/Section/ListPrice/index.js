import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react'
import './index.less'


const ListPrice =({item})=> {

  return (
    <>
      <div className="m-item">
        <div className="m-tl">{item.name}</div>
        <div className="m-ossm">こんな方におすすめ</div>
        <div className="m-rec">
          {item.rec.map((o,j)=>
            <li key={j}>{o}</li>
          )}
        </div>
        <div className="m-desc">{item.desc}</div>
        <div className="m-ft">
          {item.list.map((o,j)=>
            <div className="m-list" key={j}>
              <div className="m-row">
                <label>{o.m}</label>
                <em>{o.v}</em>
              </div>
              <div className="m-row">
                <span>{o.d}</span>
              </div>
              <div className="m-row">
                <span>{o.o}</span>
              </div>
            </div>
          )}
          <div className="m-fn">
            <a>ご予約はこちら</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default inject('ms')(observer(ListPrice))
