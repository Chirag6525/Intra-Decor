import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		// <>
		// 	<div className="w-full flex items-center justify-start">
		// 		<div className="mt-2 px-2">
		// 			<img
		// 				className="h-[7rem] w-[10rem]"
		// 				src="/logo.png"
		// 				alt="logo"
		// 			/>
		// 		</div>
		// 		<div className="cedarville-cursive-regular hover:text-teal-600 text-5xl text-teal-800 p-[1rem]">
		// 			<Link href="/">Intra Decor</Link>
		// 		</div>

		// 		<div className="flex ml-[45rem]">
		// 			<div className="flex gap-5 items-center">
		// 				<Link
		// 					href="/"
		// 					className="hover:text-teal-600"
		// 				>
		// 					<Image
		// 						src="/insta.svg"
		// 						width={25}
		// 						height={25}
		// 					/>
		// 				</Link>
		// 				<Link
		// 					href="/"
		// 					className="hover:text-teal-600"
		// 				>
		// 					<Image
		// 						src="/facebook.svg"
		// 						width={35}
		// 						height={35}
		// 					/>
		// 				</Link>
		// 				<Link
		// 					href="/"
		// 					className="hover:text-teal-600"
		// 				>
		// 					<Image
		// 						src="/pinterest.svg"
		// 						width={25}
		// 						height={25}
		// 					/>
		// 				</Link>
		// 				<Link
		// 					href="/"
		// 					className="hover:text-teal-600"
		// 				>
		// 					<Image
		// 						src="/newsletter.svg"
		// 						width={25}
		// 						height={25}
		// 					/>
		// 				</Link>
		// 				<Link
		// 					href="/"
		// 					className="hover:text-teal-600 px-3"
		// 				>
		// 					<Image
		// 						src="/search.svg"
		// 						width={40}
		// 						height={40}
		// 					/>
		// 				</Link>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className="border-2 border-teal-600 mb-2"></div>
		// 	<div className="flex justify-center items-center">
		// 		<div className="flex gap-16">
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				Decor
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				Garden
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				Home Improvement
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				Cleaning
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				Celebrations
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				What to Buy
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				News
		// 			</Link>
		// 			<Link
		// 				href="/"
		// 				className="hover:text-teal-600"
		// 			>
		// 				About Us
		// 			</Link>
		// 		</div>
		// 	</div>
		// 	<div className="border-2 border-teal-600 mt-2"></div>
		// </>
		<>
			<div className="w-full flex items-center justify-start py-4 md:py-6">
				<div className="mt-2 px-2 md:px-4">
					<img
						className="h-[7rem] w-[10rem] md:h-[5rem] md:w-[7rem] sm:h-[4rem] sm:w-[5rem]"
						src="/logo.png"
						alt="logo"
					/>
				</div>
				<div className="cedarville-cursive-regular hover:text-teal-600 text-5xl text-teal-800 p-[1rem] md:text-4xl sm:text-3xl">
					<Link href="/">Intra Decor</Link>
				</div>

				<div className="flex ml-[45rem] md:ml-[50rem] sm:ml-[10rem]">
					<div className="flex gap-5 items-center">
						<Link
							href="/"
							className="hover:text-teal-600"
						>
							<Image
								src="/insta.svg"
								width={25}
								height={25}
								className="md:w-[20] md:h-[20] sm:w-[15] sm:h-[15]"
							/>
						</Link>
						<Link
							href="/"
							className="hover:text-teal-600"
						>
							<Image
								src="/facebook.svg"
								width={35}
								height={35}
								className="md:w-[25] md:h-[25] sm:w-[20] sm:h-[20]"
							/>
						</Link>
						<Link
							href="/"
							className="hover:text-teal-600"
						>
							<Image
								src="/pinterest.svg"
								width={25}
								height={25}
								className="md:w-[20] md:h-[20] sm:w-[15] sm:h-[15]"
							/>
						</Link>
						<Link
							href="/"
							className="hover:text-teal-600"
						>
							<Image
								src="/newsletter.svg"
								width={25}
								height={25}
								className="md:w-[20] md:h-[20] sm:w-[15] sm:h-[15]"
							/>
						</Link>
						<Link
							href="/"
							className="hover:text-teal-600 px-3"
						>
							<Image
								src="/search.svg"
								width={40}
								height={40}
								className="md:w-[30] md:h-[30] sm:w-[25] sm:h-[25]"
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="border-2 border-teal-600 mb-2"></div>
			<div className="flex justify-center items-center">
				<div className="xl:flex md:flex lg:flex sm:hidden gap-16 md:gap-10 hidden">
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						Decor
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						Garden
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						Home Improvement
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						Cleaning
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						Celebrations
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						What to Buy
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						News
					</Link>
					<Link
						href="/"
						className="hover:text-teal-600"
					>
						About Us
					</Link>
				</div>
			</div>
			<div className="border-2 border-teal-600 mt-2"></div>
		</>
	);
};

export default Navbar;
