"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "+38 (97) 733 93 73",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "youremail@svyatnenko.com.ua",
	},
	{
		icon: <FaMapMarkedAlt />,
		title: "Address",
		description: "Kyiv, Ukraine",
	},
];

import { motion } from "framer-motion";
import { useState } from "react";
import { sendContactForm } from "@/lib/api";

const initValues = {
	firstname: "",
	lastname: "",
	email: "",
	phone: "",
	selectedService: "",
	message: "",
};
const initState = { values: initValues };

const Contact = () => {
	const [state, setState] = useState(initState);
	const { values } = state;

	const handleChange = ({ target }) => {
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}));
	};

	const handleSelectChange = (selectedService) => {
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				selectedService,
			},
		}));
	};

	const onSubmit = async () => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}));
		try {
			await sendContactForm(values);
		} catch (error) {
			setState((prev) => ({
				...prev,
				isLoding: false,
				error: error.message,
			}));
		}
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Let&apos;s work together</h3>
							<p className="text-white/60">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Necessitatibus beatae rerum vitae praesentium illum?
							</p>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="text"
									placeholder="Firstname"
									name="firstname"
									value={values.firstname}
									onChange={handleChange}
								/>
								<Input
									type="text"
									placeholder="Lastname"
									name="lastname"
									value={values.lastname}
									onChange={handleChange}
								/>
								<Input
									type="email"
									placeholder="Email address"
									name="email"
									value={values.email}
									onChange={handleChange}
								/>
								<Input
									type="text"
									placeholder="Phone number"
									name="phone"
									value={values.phone}
									onChange={handleChange}
								/>
							</div>
							<Select onValueChange={handleSelectChange}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a service</SelectLabel>
										<SelectItem value="Direct cargo delivery">
											Direct cargo delivery
										</SelectItem>
										<SelectItem value="Warehouse storage">
											Warehouse storage
										</SelectItem>
										<SelectItem value="Forwarding">Forwarding</SelectItem>
										<SelectItem value="Group cargo delivery">
											Group cargo delivery
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<Textarea
								className="h-[200px]"
								placeholder="Type your message here."
								name="message"
								value={values.message}
								onChange={handleChange}
							/>
							<Button
								size="md"
								className="max-w-40"
								onClick={onSubmit}
								disabled={
									!values.name ||
									!values.email ||
									!values.subject ||
									!values.message
								}
							>
								Send message
							</Button>
							<Button disabled>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />
								Please wait
							</Button>
						</form>
					</div>
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
											<div className="text-[24px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
