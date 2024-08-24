import { motion } from "framer-motion";
import React from "react";

const services = [
	{
		num: "01",
		title: "International cargo transportation",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
	{
		num: "02",
		title: "Delivery of groupage cargo from Spain",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
	{
		num: "03",
		title: "Customs clearance",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
	{
		num: "04",
		title: "Warehouses in Spain, Italy, Poland, Ukraine",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
	},
];

const Services = () => {
	return (
		<section>
			<div className="container mx-auto xl:pt-8">
				<div className="flex justify-center flex-wrap xl:flex-nowrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
					{services.map((service, index) => (
						<motion.div
							key={index}
							className="relative bg-white bg-opacity-10 backdrop-blur-4xl rounded-lg shadow-lg p-6 w-[90%] flex flex-col justify-betwee"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
						>
							<div className="relative flex items-center text-center justify-center">

								<h3 className="h3 font-bold mb-2">{service.title}</h3>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
