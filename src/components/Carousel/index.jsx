import { Cards } from '../Cards';
import Slider from "react-slick";

import './styles.scss'

export function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <Slider {...settings}>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
        <Cards className='card-vertical' color="pink-10" size="small"/>
    </Slider>
  )
}