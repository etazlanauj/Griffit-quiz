import { useState } from 'react';

function Slide({slide1}) {
  
  let selectionSlide1 = []
  let selectionSlideCollection = []
 
  function handleChange(e){

    if(e.target.id == slide1.idA){
      selectionSlide1.pop()
      selectionSlide1.push(slide1.idA)
      console.log(selectionSlide1)
    }
    if(e.target.id == slide1.idB){
      selectionSlide1.pop()
      selectionSlide1.push(slide1.idB)
      console.log(selectionSlide1)
    }
    if(e.target.id == slide1.idC){
      selectionSlide1.pop()
      selectionSlide1.push(slide1.idC)
      console.log(selectionSlide1)
    }
    if(e.target.id == slide1.idD){
      selectionSlide1.pop()
      selectionSlide1.push(slide1.idD)
      console.log(selectionSlide1)
    }
    if(e.target.id == 'slide9-cb-a' || 'slide9-cb-b' || 'slide9-cb-c' || 'slide9-cb-d'){
      // selectionSlideCollection = selectionSlide1.concat(selectionSlide1)
      // console.log('hell yea!')
      // console.log(selectionSlideCollection)
    }
  }  

  return (
    <div className="slide slide-1">
      <div className="slide__title">
        <div className="divisor"></div>
        <h3>{slide1.title}</h3>
      </div>
      <div className="slide__form">
        <div className="slide__form-title">
          <p>Selecciona tu respuesta para continuar.</p>
        </div>
        <div className="slide__form-wrappet-inputs">
          <label className="form__radio">
            <input data-slide="3" type="radio" id={slide1.idA} name="p1"className="form__radio_input" value="A" onChange={handleChange}/><span>{slide1.inputA}</span>
          </label><br/>
          <label className="form__radio">
            <input data-slide="3" type="radio" id={slide1.idB}  name="p1"className="form__radio_input" value="B" onChange={handleChange}/><span>{slide1.inputB}</span>
          
          </label><br/>
          <label className="form__radio">
            <input data-slide="3" type="radio" id={slide1.idC} name="p1"className="form__radio_input" value="C" onChange={handleChange}/><span>{slide1.inputC}</span>
          </label><br/>
          <label className="form__radio">
            <input data-slide="3" type="radio" id={slide1.idD} name="p1"className="form__radio_input" value="D" onChange={handleChange}/><span>{slide1.inputD}</span>
          </label><br/>
          <div className="indicator">{slide1.nPregunta}</div>
        </div>
      </div>
      <div className="slide__img">
        <img src={slide1.imgSlide}/>
      </div>
    </div>
  );
}

export default Slide;
