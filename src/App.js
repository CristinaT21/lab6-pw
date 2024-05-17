import './App.css';
import React from 'react';
// import SVG from 'svg.js'; 
import './material.css';
import CursorEffect from './components/CursorEffect';
import BoxComponent from './components/BoxComponent';
import Header from './components/Header';

function App() {
//   const [selectedOption, setSelectedOption] = useState('');
  
//   useEffect(() => {
//     // Initialize SVG elements using refs
//     const watchFaceRef = SVG.get('watch-face');
//     const kurtkaFaceRef = SVG.get('kurtka-face');
//     const capa_1Ref = SVG.get('Capa_1');
//     const capa_2Ref = SVG.get('Capa_2');
//     const capa_3Ref = SVG.get('Capa_3');
//     const capa_4Ref = SVG.get('Capa_4');
// 	var speed = '0.5s';

//     // Store SVG elements in state
//     setSVGElements({
//       watchFace: watchFaceRef,
//       kurtkaFace: kurtkaFaceRef,
//       capa_1: capa_1Ref,
//       capa_2: capa_2Ref,
//       capa_3: capa_3Ref,
//       capa_4: capa_4Ref,
//     });
//   }, []);

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };
//   useEffect(() => {
// 	if(selectedOption) {
// 	  manipulateSVG(selectedOption);
// 	}
//   }, [selectedOption]);
  
//   // Function to manipulate SVG elements
//   const manipulateSVG = (color) => {
//     // Check if SVG elements are initialized
//     if (SVGElements) {
//       // Example: Change fill color of SVG elements based on selected color
//       SVGElements.watchFace.animate(speed).attr('fill', color);
//       SVGElements.kurtkaFace.animate(speed).attr('fill', color);
//       SVGElements.capa_1.animate(speed).attr('fill', color);
//       SVGElements.capa_2.animate(speed).attr('fill', color);
//       SVGElements.capa_3.animate(speed).attr('fill', color);
//       SVGElements.capa_4.animate(speed).attr('fill', color);
//     }
  return (
	  <div className='App'>
		  
		<CursorEffect />
	    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
			<Header />
			<main className="mdl-layout__content">
				 <BoxComponent /> 

					
			</main>
		</div>
	</div>
  );
}

export default App;