import React, {useState} from 'react'
import './slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'


const Slider = () => {

const [ slideIndex, setSlideIndex ] = useState(1)

const nextSlide = () => {
    if(slideIndex === dataSlider.length){
        setSlideIndex(1)
    }else{
        setSlideIndex(slideIndex + 1)
    }
}

const prevSlide = () => {
    if(slideIndex <= 1){
        setSlideIndex(dataSlider.length)
    }else(
        setSlideIndex(slideIndex - 1)
    )
}


const moveDot = (index) => {
    setSlideIndex(index)
}

return(
    <div className="container-slider">
        {dataSlider.map((obj, index) => {
            return (
                <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} 
                key={obj.id}>
                    <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} alt={obj.name}/>
                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction="next"/>
        <BtnSlider moveSlide={prevSlide} direction="prev"/>

        <div className="container-dots">
            {Array.from({length: 5}).map((item, index) => {
                return(
                <div 
                onClick={()=> moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}>

                </div>
                )})
            }
        </div>
    </div>
)

}


export default Slider