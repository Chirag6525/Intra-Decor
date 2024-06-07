import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="space-y-6 md:flex md:flex-wrap">
			<div className="border-2 border-teal-600 w-full"></div>

			<div className="md:w-full lg:w-1/2 xl:w-1/2">
				<div className="pl-5 md:pl-0">
					<div className="text-3xl font-bold">Intra Decor</div>
					<h3 className="text-lg">Transforming Spaces,Enhancing Lives</h3>
					<button className="mt-8 bg-teal-800 text-white rounded-md px-4 py-3">
						Subscribe
					</button>
					<div className="flex items-center justify-start pt-10">
						<h3 className="text-base text-gray-500">Follow Us:</h3>
						<div className="flex pl-4">
							<div className="flex gap-5 items-center">
								<Link
									href="/"
									className="hover:text-teal-600"
								>
									<Image
										src="/insta.svg"
										width={25}
										height={25}
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
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="md:w-full lg:w-1/2 xl:w-1/2 hidden md:flex lg:flex xl:flex md:gap-5 lg:gap-10 xl:gap-20">
				<div className="text-teal-800 font-bold">
					<div className="flex flex-col space-y-2 mt-2 items-center justify-center">
						<Link href="#">Decor</Link>
						<Link href="#">Garden</Link>
						<Link href="#">Home Improvement</Link>
						<Link href="#">Cleaning</Link>
						<Link href="#">Celebrations</Link>
						<Link href="#">What to Buy</Link>
						<Link href="#">News</Link>
					</div>
				</div>
				<div className="pt-[1rem]">
					<div className="flex-col flex text-gray-500 items-center justify-start">
						<Link
							href="#"
							className="mr-4"
						>
							About Us
						</Link>
						<Link
							href="#"
							className="mr-4"
						>
							Terms of Service
						</Link>
						<Link
							href="#"
							className="mr-4"
						>
							Editorial Guidelines
						</Link>
						<Link
							href="#"
							className="mr-4"
						>
							Advertise
						</Link>
					</div>
				</div>
				<div className="flex flex-col text-gray-500 items-center justify-start pt-[1rem]">
					<Link
						href="#"
						className="mr-4"
					>
						Privacy Policy
					</Link>

					<Link
						href="#"
						className="mr-4"
					>
						Careers
					</Link>
					<Link
						href="#"
						className="mr-4"
					>
						Contact
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
