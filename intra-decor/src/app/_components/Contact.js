'use client'

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com"

const Contact = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [queryText, setQueryText] = useState("");
	const handleSend = async() => {

		if (!phoneNumber) {
			toast.error("Enter Phone Number")
			return
		}
		if (!queryText) {
			toast.error("Enter your Query")
			return
		}
		console.log(`${phoneNumber} ${queryText}`)
		const templateEmail = {
			from_name: phoneNumber,
			message: queryText,
		}
		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				templateEmail,
				process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
			)
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
				toast.success("Submit Successfully!!!!");
				setPhoneNumber("");
				setQueryText("");
			})
			.catch((err) => {
				console.error("FAILED...", err);
			});
		
	};
	return (
		<div className="flex p-[2rem]">
			<div className="w-1/2 flex flex-col items-start justify-center">
				<h2 className="text-4xl">Company Contact Details</h2>
				<p className="text-2xl">123 Street, City, State, Country</p>
				<p className="text-2xl">Email: info@company.com</p>
                <p className="text-2xl">Phone: +1 234 567 890</p>
                <p>For any Query, you can contact us by filling the form.</p>
			</div>
			<div className="w-1/2 flex items-center justify-center">
				<div className="rounded-3xl shadow-2xl shadow-teal-800">
					<div className="items-center justify-center flex text-xl p-[2rem] font-bold">
						Contact Us
					</div>
					<div className="items-center justify-center flex p-[1rem] ">
						<input
							className="block mt-2 rounded-lg px-2 py-2 border-teal-800 border-2"
							type="text"
							placeholder="Phone Number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</div>
					<div className="items-center justify-center flex p-[2rem] py-0">
						<textarea
							className=" rounded-lg px-2 h-[5rem] w-[15rem] py-2 border-teal-800 border-2"
							placeholder="Your Query"
							value={queryText}
							onChange={(e) => setQueryText(e.target.value)}
						/>
					</div>
					<div className="items-center justify-center flex pb-[2rem] pt-[1rem]">
						<ToastContainer/>
						<button
							className="mt-2 bg-teal-800 text-white rounded-lg px-5 py-2"
							onClick={handleSend}
						>
							Send
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
