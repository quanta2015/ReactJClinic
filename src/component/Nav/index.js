import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import * as urls from 'constant/urls'

import Header from 'component/Header'
import Footer from 'component/Footer'

import './index.less'

const Nav =({children,ms})=> {

  const [params, setParams] = useState(0);

  useEffect(() => {
    ms.post(urls.API_QRY_NAV,null).then( r => {
      const { code, ..._params} = r
      setParams(_params)
    });
  }, []);

  return (
    <>
      <Header {...params}/>
      {children}
      <Footer {...params}/>
    </>
  )
}

export default inject('ms')(observer(Nav))
