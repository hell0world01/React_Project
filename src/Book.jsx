import React from "react";
import "./Book.css";

const Book = ({ title, author, img, numb }) => {

	return (
		<div>
			<article className="book relative">
				<p className="number">{`#${numb + 1}`}</p>
				<img src={img} alt="" />
				<h1 className="mt-2">{title}</h1>
				<h4 className="text-gray-500">{author}</h4>
			</article>
		</div>
	);
};

export default Book;
