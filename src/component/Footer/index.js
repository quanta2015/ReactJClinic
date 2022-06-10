import React, { useState, useEffect } from 'react';

import './index.less'




const Footer =({footer})=> {
  const fJ = (footer)?JSON.parse(footer?.json).footer:[] 

  return (
    <>
      <div className="g-ft">
        <p>
          {fJ.map((item,i)=> <span key={i}>{item}</span> )}
        </p>
      </div>
    </>
  )
}

export default Footer
