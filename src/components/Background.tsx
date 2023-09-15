import bg from '../assets/bg.mp4'



const Background = () => {
  return (
    <div className='background'>
      <video src={bg} autoPlay loop muted className='video'/>
    </div>
  )
}

export default Background
