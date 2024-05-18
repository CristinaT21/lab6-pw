import React from 'react';
// import SVG from 'svg.js'; 
import './material.css';
import './App.css';
import CursorEffect from './components/CursorEffect';
import BoxComponent from './components/BoxComponent';
import Header from './components/Header';
import AddFav from './components/AddFav';

function App() {
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