import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapFromTo = () => {
 useGSAP(()=>{
    gsap.fromTo("#blue-box",{
        x:0,
        rotation:0,
        borderRadius:'0%'
    },{
        x:250,
        repeat:-1,
        yoyo:true,
        borderRadius:"100%",
        rotate:360,
        duration:2,
        ease:"bounce.out"
    })
  },[])
  return (
    <div>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg' />
    </div>
  )
}

export default GsapFromTo
