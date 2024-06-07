'use client'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

const images = [
	"/bedroom.jpg",
    "/bathroom.jpg",
	"/living.jpg",
	"/spacing.jpg",
	"/kitchen.jpg",
	"/office.jpg",
	
];
const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
     useEffect(() => {
				const timer = setInterval(() => {
					setCurrentImageIndex((currentImageIndex + 1) % images.length);
				}, 3000); // Change image every 3 seconds

				return () => clearInterval(timer);
			}, [currentImageIndex]);
  return (
		// <div className="relative">
		// 	<img
		// 		src={images[currentImageIndex]}
		// 		alt="Hero image"
		// 		className="w-full h-[40rem] object-fill"
		// 	/>
		// 	<motion.div
		// 		initial={{ width: 0 }}
		// 		animate={{ width: "100%" }}
		// 		transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
		// 		className="absolute top-0 left-0 w-full h-full flex flex-col bg-teal-800 bg-opacity-50 justify-center items-start"
		// 	>
		// 		<h1 className="text-white text-7xl px-10 font-extrabold ">
		// 			Transforming Spaces,
		// 		</h1>
		// 		<h1 className="text-white text-7xl px-10 font-extrabold">
		// 			Enhancing Lives.
		// 		</h1>
		// 	</motion.div>
		// </div>
		<div className="relative">
			<img
				src={images[currentImageIndex]}
				alt="Hero image"
				className="w-full h-[40rem] object-fill md:h-[40rem] sm:h-[30rem] xs:h-[20rem]" // Adjust image height for different screen sizes
			/>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: "100%" }}
				transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
				className="absolute top-0 left-0 w-full h-full flex flex-col bg-teal-800 bg-opacity-50 justify-center items-start"
			>
				<h1 className="text-white text-2xl px-10 font-extrabold md:text-8xl sm:text-4xl xs:text-3xl">
					
					Transforming Spaces,
				</h1>
				<h1 className="text-white text-2xl px-10 font-extrabold md:text-8xl sm:text-4xl xs:text-3xl">
					Enhancing Lives.
				</h1>
			</motion.div>
		</div>
	);
}

export default HeroSection