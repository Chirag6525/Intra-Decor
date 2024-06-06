"use client";
import React, { useRef } from "react";

import { motion } from "framer-motion";

const styles = [
	{ name: "Indian", image: "/indian.jpg" },
	{ name: "Contemporary", image: "/contemporary.jpg" },
	{ name: "Modern", image: "/modern.jpg" },
	{ name: "Eclectic", image: "/eclectic.jpg" },
	{ name: "Asian", image: "/asian.jpg" },
	{ name: "American", image: "/american.jpg" },
	{ name: "Coastal", image: "/coastal.jpg" },
	{ name: "Industrial", image: "/industrial.jpg" },
	{ name: "Transitional", image: "/transitional.jpg" },
	{ name: "Tropical", image: "/Tropical.jpg" },
	{ name: "British", image: "/British.jpg" },
	// Add more styles here...
];
const StyleList = () => {
	const scrollContainer = useRef(null);

	const scroll = (scrollOffset) => {
		scrollContainer.current.scrollBy({
			left: scrollOffset,
			behavior: "smooth",
		});
	};
	return (
		<>
			<div className="ml-[8rem] mt-[3rem] mr-[8rem]">
				<div className="text-5xl font-bold">Browse By Style</div>
			</div>
			<div className="flex items-center justify-between ml-[8rem] mt-[3rem] mr-[8rem]">
				{/* <button
					className="px-3 py-1 bg-gray-200 rounded-full cursor-pointer text-2xl font-extrabold"
					onClick={() => scroll(-1000)}
				>
					{"<"}
				</button> */}
				<div
					className="flex overflow-x-scroll hide-scrollbar rounded-lg"
					style={{
						gap: "1rem",
						padding: "1rem",
						overflowY: "hidden",
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}
				>
					{styles.map((style, index) => (
						<motion.div
							initial={{ x: "0",}}
							animate={{ x: "-870%"}}
							transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
							key={index}
							className="flex flex-col items-center m-2 shadow-lg shadow-teal-600 rounded-lg"
							style={{ minWidth: "340px" }}
						>
							<img
								src={style.image}
								alt={style.name}
								className="object-cover rounded-lg"
								style={{ height: "300px", width: "340px" }}
							/>
							<p className="py-2 text-xl font-semibold">{style.name}</p>
						</motion.div>
					))}
				</div>
				{/* <button
					className="p-2 bg-gray-200 rounded-full cursor-pointer text-2xl font-extrabold px-3 py-1"
					onClick={() => scroll(1000)}
				>
					{">"}
				</button> */}
			</div>
		</>
	);
};

export default StyleList;
