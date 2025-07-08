import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Gsapto = () => {
  useGSAP(()=>{
    gsap.from("#blue-box",{
        x:250,
        repeat:-1,
        yoyo:true,
        rotate:360,
        duration:2,
        ease:"power1.inOut"
    })
  },[])
  return (
    <div>
      <div id='blue-box' className='w-20 h-20 bg-blue-500 rounded-lg' />
    </div>
  )
}

export default Gsapto
