

function User() {

 
return (

<main className=''>
  <div className="mt-3 text-lime-300 text-center text-4xl font-semibold">IP CAMERA TESTING</div>
 
  <div className={`grid grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-2  mx-6 mt-20 `}>
      
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-1" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-2" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-3" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-4" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-5" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-6" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-7" frameborder="0" allowfullscreen></iframe>
  <iframe width="560" height="315" src="http://13.235.85.102:5080/live/play.html?id=camera-8" frameborder="0" allowfullscreen></iframe>
   
  </div>
     
  </main>


)
}

export default User;
