
import Header from './header.js';
import './scss/main.scss';
import Slide from './slide.js';
import bg1 from './img/bg_1.png';
import bg2 from './img/bg_2.png';
import bg3 from './img/bg_3.png';
import bg4 from './img/bg_4.png';
import bg5 from './img/bg_5.png';
import bg6 from './img/bg_6.png';
import bg7 from './img/bg_7.png';
import bg8 from './img/bg_8.png';
import bg9 from './img/bg_9.png';


function App() {

  const slide1 = {
    title: "¿Cuál es la clave para que tus mezclas Flexi queden bien hechas?",
    inputA: "A) Que el agua esté helada",
    inputB: "B) No contienen GMS (Glutamato monosódico)",
    inputC: "C) No contienen sabores artificiales",
    inputD: "D) Todas las anteriores",
    imgSlide: bg1,
    nPregunta: "Pregunta 1 de 9",
    idA: "slide1-cb-a",
    idB: "slide1-cb-b",
    idD: "slide1-cb-c",
    idC: "slide1-cb-d",
  }
  const slide2 = {
    title: "¿Cuál es la clave para que tus mezclas Flexi queden bien hechas?",
    inputA: "A) Que el agua esté helada",
    inputB: "B) Usar aceite con sal",
    inputC: "C) Mezclar en licuadora",
    inputD: "D) Dejar reposar por 2 horas",
    imgSlide: bg2,
    nPregunta: "Pregunta 2 de 9",
    idA: "slide2-cb-a",
    idB: "slide2-cb-b",
    idD: "slide2-cb-c",
    idC: "slide2-cb-d",
  }
  const slide3 = {
    title: "Después de añadir el agua y el aceite ¿Cuánto tiempo se deja en la nevera la mezcla?",
    inputA: "A) Mínimo 15 minutos",
    inputB: "B) Mínimo 20 minutos",
    inputC: "C) Máximo 10 minutos",
    inputD: "D) Máximo 20 minutos",
    imgSlide: bg3,
    nPregunta: "Pregunta 3 de 9",
    idA: "slide3-cb-a",
    idB: "slide3-cb-b",
    idD: "slide3-cb-c",
    idC: "slide3-cb-d",
  }
  const slide4 = {
    title: "¿De qué formas puedes cocinar el Plant Burger Mix y el Plant Chicken Burger Mix?",
    inputA: "A) Sartén",
    inputB: "B) Horno",
    inputC: "C) Air fryer",
    inputD: "D) Parrilla",
    inputE: "E) Fritura",
    inputF: "F) Todas las anteriores",
    imgSlide: bg4,
    nPregunta: "Pregunta 4 de 9",
    idA: "slide4-cb-a",
    idB: "slide4-cb-b",
    idD: "slide4-cb-c",
    idC: "slide4-cb-d",
  }
  const slide5 = {
    title: "¿Qué significa cuando alguien dice que es Flexívoro?",
    inputA: "A) Que no come nada de proteína animal (pollo, res, pescado, mariscos, cerdo, etc...)",
    inputB: "B) No consume ningún alimento de fuente animal (huevos, leche, carne, etc...)",
    inputC: "C) Está dispuesto a consumir proteína vegetal de vez en cuando sin renunciar al sabor y textura de la proteína animal.",
    inputD: "D) Tiene una dieta especial por cuestiones de salud.",
    imgSlide: bg5,
    nPregunta: "Pregunta 5 de 9",
    idA: "slide5-cb-a",
    idB: "slide5-cb-b",
    idD: "slide5-cb-c",
    idC: "slide5-cb-d",
  }
  const slide6 = {
    title: "¿Cuál es el rendimiento de la Plant Burger Mix y la Plant Chicken Burger Mix de 155g?",
    inputA: "A) Rinde para 1 porción de 155g",
    inputB: "B) Rinde para 5 porciones de 100g",
    inputC: "C) Rinde para 3 porciones de 100g",
    inputD: "D) Rinde para 10 porciones de 100g",
    imgSlide: bg6,
    nPregunta: "Pregunta 6 de 9",
    idA: "slide6-cb-a",
    idB: "slide6-cb-b",
    idD: "slide6-cb-c",
    idC: "slide6-cb-d",
  }
  const slide7 = {
    title: "¿Cuánto puede durar el producto preparado, refrigerado y congelado?",
    inputA: "A) 1 mes refrigerado y 2 meses congelado.",
    inputB: "B) 15 días refrigerado y 1 mes congelado.",
    inputC: "C) 48 horas refrigerado y 1 mes congelado.",
    inputD: "D) 24 horas refrigerado y 15 días congelado.",
    imgSlide: bg7,
    nPregunta: "Pregunta 7 de 9",
    idA: "slide7-cb-a",
    idB: "slide7-cb-b",
    idD: "slide7-cb-c",
    idC: "slide7-cb-d",
  }
  const slide8 = {
    title: "¿Cuáles son los 4 productos disponibles de la línea Flexi?",
    inputA: "A) Hamburguesa sabor a res, hamburguesa sabor a pollo, kibbe y carne molida de res.",
    inputB: "B) Hamburguesa sabor a res, salchicha sabor a res, carne molida de pollo y kibbe.",
    inputC: "C) Hamburguesa sabor a pollo, tocino sabor a cerdo, kibbe y albóndigas de res.",
    inputD: "D) Kibbe, hamburguesa sabor a pollo, hamburguesa sabor a cerdo, albóndigas de pollo.",
    imgSlide: bg8,
    nPregunta: "Pregunta 8 de 9",
    idA: "slide8-cb-a",
    idB: "slide8-cb-b",
    idD: "slide8-cb-c",
    idC: "slide8-cb-d",
  }
  const slide9 = {
    title: "¿Qué recomendación es importante para preparar la nueva proteína alternativa?",
    inputA: "A) Preparar todo el contenido del empaque de una vez.",
    inputB: "B) Se puede usar para preparar hamburguesas, albóndigas, croquetas, rellenos y más.",
    inputC: "C) El producto preparado se puede congelar hasta por 1 mes o refrigerar por 48 horas.",
    inputD: "D) Kibbe, hamburguesa sabor a pollo, hamburguesa sabor a cerdo, albóndigas de pollo.",
    imgSlide: bg9,
    nPregunta: "Pregunta 9 de 9",
    idA: "slide9-cb-a",
    idB: "slide9-cb-b",
    idD: "slide9-cb-c",
    idC: "slide9-cb-d",
  }

  return (
    <>
      <Header/>
      <Slide slide1={slide1}/>
      <Slide slide1={slide2}/>
      <Slide slide1={slide3}/>
      <Slide slide1={slide4}/>
      <Slide slide1={slide5}/>
      <Slide slide1={slide6}/>
      <Slide slide1={slide7}/>
      <Slide slide1={slide8}/>
      <Slide slide1={slide9}/>
    </>
  )
}

export default App;
