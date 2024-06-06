"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const DesignGallary = () => {
	const galleryItems = [
		{
			title: "Modular Kitchen",
			img: "/kitchen.jpg",
			link: "/kitchen",
		},
		{
			title: "Bedroom",
			img: "/bedroom.jpg",
			link: "/bedroom",
		},
		{
			title: "Living Room",
			img: "/living.jpg",
			link: "/living",
		},
		{
			title: "Bathroom",
			img: "/bathroom.jpg",
			link: "/bathroom",
		},
		{
			title: "Space Saving Furniture",
			img: "/spacing.jpg",
			link: "/space",
		},
		{
			title: "Home Office",
			img: "/office.jpg",
			link: "/office",
		},
		// Add other gallery items here...
	];
	return (
		<>
			<div className="ml-[8rem] mt-[3rem] mr-[8rem]">
				<div className="text-5xl font-bold">Design Gallary</div>
				<div className="text-lg py-2">
					“Welcome to our Design Gallery, a vibrant showcase of diverse interior
					designs. Here, you'll find a curated collection of aesthetic spaces,
					each telling a unique story of creativity and innovation.”
				</div>
			</div>
			<div className="grid grid-cols-3 gap-8 ml-[8rem] mt-[2rem] mr-[8rem]">
				{galleryItems.map((item) => (
					<Link
						href={item.link}
						key={item.title}
					>
						<div className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 shadow-teal-800">
							<img
								src={item.img}
								alt={item.title}
								className="w-full h-full"
								style={{ height: "300px" }}
							/>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 3, delay: 0.5 }}
								className="absolute bottom-0 left-0 p-4"
							>
								<p className="text-white text-2xl font-bold mb-2">
									{item.title}
								</p>
							</motion.div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default DesignGallary;
