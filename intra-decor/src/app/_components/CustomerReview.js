'use client'
import React, { useState } from 'react'
const reviews = [
	// Add your reviews here
	// Each review should be an object with fields for the image, text, name, and profession
	{
		image: "/m-1.svg",
		text: "The team at the startup is fantastic! They transformed my dull and outdated living room into a vibrant and modern space that I love. Their use of color and texture is outstanding. Highly recommended!",
		name: "Jack",
		profession: "Artist",
	},
	{
		image: "/f-1.svg",
		text: "I hired this startup to redesign my kitchen, and I couldn't be happier with the results. They maximized the small space I have, making it look spacious and airy. The design is modern yet timeless. Great job!",
		name: "Zoya",
		profession: "HouseWife",
	},
	{
		image: "/f-2.svg",
		text: "Working with this interior design startup was a pleasure. They listened to my ideas, suggested improvements, and created a design that was both practical and beautiful. My home now feels like a sanctuary. Thank you!",
		name: "Selena",
		profession: "Office Worker",
	},
	{
		image: "/mo-2.svg",
		text: "The interior design team did an amazing job with my office space. They managed to create a perfect balance between professionalism and creativity. The space is now not only functional but also inspiring.",
		name: "Sam",
		profession: "ShopOwner",
	},
	{
		image: "/mb-3.svg",
		text: "I'm absolutely thrilled with the transformation of my living room. The team at the startup understood my vision and brought it to life beautifully. Their attention to detail is commendable. I highly recommend their services!",
		name: "Rohan",
		profession: "Student",
	},
];
const CustomerReview = () => {
     const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

			const handlePrev = () => {
				setCurrentReviewIndex(
					(currentReviewIndex - 1 + reviews.length) % reviews.length
				);
			};

			const handleNext = () => {
				setCurrentReviewIndex((currentReviewIndex + 1) % reviews.length);
			};

			const currentReview = reviews[currentReviewIndex];
  return (
		<div className="flex items-center justify-center  bg-teal-100">
			<button
				onClick={handlePrev}
				className="bg-teal-800 hover:bg-teal-400 text-white font-bold py-2 px-3 rounded-lg inline-flex items-center ml-[1rem]"
			>
				Previous
			</button>
			<div className="flex flex-col items-center space-y-4  m-[5rem] p-[5rem] rounded-3xl bg-teal-700 shadow-md shadow-teal-300">
				<div className="text-white text-3xl font-semibold">
					Our Happy Customers
				</div>
				<img
					src={currentReview.image}
					alt={currentReview.name}
					className="rounded-full w-24 h-24 object-cover"
				/>
				<p className="text-center">{currentReview.text}</p>
				<h2 className="font-bold">{currentReview.name}</h2>
				<h3>{currentReview.profession}</h3>
			</div>
			<button
				onClick={handleNext}
				className="bg-teal-800 hover:bg-teal-400 text-white font-bold py-2 px-3 rounded-lg inline-flex items-center mr-[1rem]"
			>
				Next
			</button>
		</div>
	);
}

export default CustomerReview