"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = "/api/send";

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: "POST",
			// Tell the server we're sending JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		const resData = await response.json();

		if (response.status === 200) {
			console.log("Message sent.");
			setEmailSubmitted(true);
		}
	};

	return (
		<section
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Work Together
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					{" "}
					I&apos;m currently open to frontend or full-stack roles, freelance opportunities, and creative collaborations. Let&apos;s connect!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/JHoangUC" target="_blank">
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link href="https://www.linkedin.com/in/john-hoang-848a031a1/"  target="_blank">
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<div>
				
				{emailSubmitted ? (
					<p className="text-green-500 text-sm mt-2">
						Email sent successfully!
					</p>
				) : (
					
					<form className="flex flex-col" action="https://api.web3forms.com/submit" method="POST">
						<input type="hidden" name="apikey" value="6d440886-061e-4018-8df1-f1ad2e9a7c0d"/>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="text-white block mb-2 text-sm font-medium"
							>
								Email:
							</label>
							<input
								name="email"
								type="email"
								id="email"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="subject"
								className="text-white block text-sm mb-2 font-medium"
							>
								Subject
							</label>
							<input
								name="subject"
								type="text"
								id="subject"
								required
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder=""
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="text-white block text-sm mb-2 font-medium"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
								placeholder=""
							/>
						</div>
						<button
							type="submit"
							className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
						>
							Send Message
						</button>
						
					</form>
				)}
			</div>
		</section>
	);
};

export default EmailSection;
