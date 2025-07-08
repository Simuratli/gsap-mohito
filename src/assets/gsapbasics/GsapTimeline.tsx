import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapTimeline = () => {
    const timeline = gsap.timeline({
        repeat:-1,
        repeatDelay:1,
        yoyo:true,
    })


    useGSAP(()=>{
        timeline.to('#yellow-box', {
            rotate:360,
            x:250,
            ease:"back.out",
            borderRadius:"100%",
            duration:2
        })
        timeline.to("#yellow-box",{
            y:260,
            scale:2,
            rotation:360,
            borderRadius:'100%',
            duration:2,
            ease:"back.inOut"
        })

        timeline.to("#yellow-box",{
            x:500,
            scale:1,
            rotation:360,
            borderRadius:'8px',
            duration:2,
            ease:"back.inOut"
        })
    },[])
  return (
    <div className='mt-20 space-y-10 '>
        <button onClick={()=>{
            if(timeline.paused()){
                timeline.play()
            }else{
                timeline.pause()
            }
        }}>Play/Pause</button>

        <div id="yellow-box" className='w-20 h-20 bg-yellow-500 rounded-lg'></div>
    </div>
  )
}

export default GsapTimeline
