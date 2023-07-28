import React from 'react'
import Carousel from 'react-elastic-carousel';
import { ExcersiseCard } from '../ExcersiseCard';
import './style.css'
export const ExcersiseCarousel = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },//change this to 1 to see the difference
        { width: 550, itemsToShow: 2, itemsToScroll: 2 }, // change this to 2 to see the difference
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
        ];
  return (


   

        <Carousel breakPoints={breakPoints}>
            <ExcersiseCard number={1}/>
            <ExcersiseCard number={2}/>
            <ExcersiseCard number={3}/>
            <ExcersiseCard number={4}/>
            <ExcersiseCard number={5}/>
            <ExcersiseCard number={6}/>
        </Carousel>


  )
}
