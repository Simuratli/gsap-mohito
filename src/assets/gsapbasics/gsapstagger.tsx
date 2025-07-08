import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GsapStagger = () => {

  useGSAP(()=>{
    gsap.to(".stagger-box",{
      y:150,
      rotation:360,
      borderRadius:"100%",
      repeat:-1,
      yoyo:true,
      stagger:{
        amount:1.5,
        grid:[1,1],
        axis:"y",
        ease:"circ.inOut",
        from:"center"
      }
    })
  },[])

  return (
    <div>
        <div className='flex gap-5'>
            <div className='w-20 h-20 bg-indigo-200 rounded-lg stagger-box'></div>
            <div className='w-20 h-20 bg-indigo-300 rounded-lg stagger-box'></div>
            <div className='w-20 h-20 bg-indigo-400 rounded-lg stagger-box'></div>
            <div className='w-20 h-20 bg-indigo-500 rounded-lg stagger-box'></div>
            <div className='w-20 h-20 bg-indigo-600 rounded-lg stagger-box'></div>
            <div className='w-20 h-20 bg-indigo-700 rounded-lg stagger-box'></div>
            <div className='w-20 h-20 bg-indigo-800 rounded-lg stagger-box'></div>
        </div>
    </div>
  )
}

export default GsapStagger
