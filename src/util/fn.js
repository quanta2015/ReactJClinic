

export const isN=(e)=>{
  return  ((e===null)||(e==='')||(e===undefined))?true:false
}

export const isMobile =()=>{ 
  return document.querySelector('html').clientWidth<1000
}


export default function clone(e) {
  return JSON.parse(JSON.stringify(e))
}
