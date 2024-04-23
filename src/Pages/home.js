import React from 'react'
import Savorous from '../Components/Savorous/Savorous'
import Ratings from '../Components/Ratings/ratings'
import Newsletter from '../Components/NewsLetter/Newsletter'
import IndividualIntervalsExample from '../Components/Carousel/Carousel'

const Home = () => {
    
  return (
    <div>
        <IndividualIntervalsExample />
        <Savorous />
        <Ratings />
        <Newsletter/>
    </div>
  )
}

export default Home