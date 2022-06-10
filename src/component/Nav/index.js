import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Header from 'component/Header'
import Footer from 'component/Footer'

import './index.less'

const Nav =({children})=> 
  <>
    <Header />
    {children}
    <Footer />
  </>

export default inject('ms')(observer(Nav))
