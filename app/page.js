"use client"
import HlsPlayer from "./components/hslplayer"

function User() {

 
return (

<main className=''>
  <div className="mt-3 text-lime-300 text-center text-4xl font-semibold">IP CAMERA TESTING</div>
 
  <div className={`grid grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-2  mx-6 mt-20 `}>
      
   <HlsPlayer  url={"http://13.235.85.102:5080/live/streams/camera-1.m3u8"}/>
   <HlsPlayer url={"https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8"}/>
   <HlsPlayer url={"http://13.235.85.102:5080/live/streams/camera-3.m3u8"}/>
   <HlsPlayer url={"http://13.235.85.102:5080/live/streams/camera-4.m3u8"}/>
   <HlsPlayer url={"http://13.235.85.102:5080/live/streams/camera-5.m3u8"}/>
   <HlsPlayer url={"http://13.235.85.102:5080/live/streams/camera-6.m3u8"}/>
   <HlsPlayer url={"http://13.235.85.102:5080/live/streams/camera-7.m3u8"}/>
   <HlsPlayer url={"http://13.235.85.102:5080/live/streams/camera-8.m3u8"}/>
   
  </div>
     
  </main>


)
}

export default User;
