import React from 'react'
import { useState,useEffect } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'   
import './SlideCarousel.css'
import'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { fetchData } from '../../utils/fetch'
import { exerciseData } from '../../utils/fetch'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';




import slide_image_1 from '../../assets/slide_image_1.jpg'
import slide_image_2 from '../../assets/slide_image_2.jpg'
import slide_image_3 from '../../assets/slide_image_3.jpg'
import slide_image_4 from '../../assets/slide_image_4.jpg'
import slide_image_5 from '../../assets/slide_image_5.jpg'
import slide_image_6 from '../../assets/slide_image_6.jpg'
import { ExcersiseCard } from '../../ExcersiseCard'

const excersiselist = [
    {
        id: 1,
        name: 'bench press',
    },
    {
        id: 2,
        name: 'deadlift',
    },
    {
        id: 3,
        name: 'squat',
    }


]

const SlideCarousel = () => {
    const [exercise, setExercise] = useState([]);

    useEffect(() => {
      // Define the async function inside useEffect and call it immediately
      const getExercise = async () => {
        try {
          const response = await fetchData(excersiselist[1].name);
          setExercise(response);
          console.log(exercise);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        
      };
    
      getExercise();
    }, []);
    if (!exercise.length) return 'Loading...';
    
 
    
    return (
        <div className="container">
          <h1 className="heading">Build a Better Workout Plan</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            {
            exercise.map((data) => (  
              <SwiperSlide>
                {/* <ExcersiseCard giflink= {data.equipment}/> */}
                <img src={data.gifUrl}  loading ="lazy" />
              </SwiperSlide>
            ))
          }
            
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
          
          
        </div>
      
      );
    }

export default SlideCarousel