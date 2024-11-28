import React from "react";
import PersonList from "./components/PersonList/PersonList";
import ImageSlider from "./ImageSlider";

import "./App.css"
import Slider from "./components/Slider/Slider";

export default function App() {
	return (
		<>
		{/* <h1>amazon best sellers</h1>
		<div className='booklist'>
			{
				books.map( (book, index) => {	
						return <Book findBook={findBook} numb={index} {...book} key={book.id} />
					}
				)
			}
		</div> */}
		<Slider />
		</>
	);
}
