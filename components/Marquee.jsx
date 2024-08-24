import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// Функция для рандомизации массива
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const Marquee = () => {
	const initialMarquee = [
		"/assets/logos/2.svg",
		"/assets/logos/15.png",
		"/assets/logos/4.png",
		"/assets/logos/5.png",
		"/assets/logos/6.png",
		"/assets/logos/7.png",
		"/assets/logos/8.png",
		"/assets/logos/9.png",
		"/assets/logos/11.svg",
		"/assets/logos/13.svg",
		"/assets/logos/14.png",
	];

	const [upperMarquee, setUpperMarquee] = useState([]);

	useEffect(() => {
		setUpperMarquee(shuffleArray([...initialMarquee]));
	}, []);

	return (
		<div className="container mx-auto xl:pt-8 overflow-hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
				}}
				className="xl:pt-8 mt-8"
			>
				<div className="flex">
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: "-100%" }}
						transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
						className="flex flex-shrink-0"
					>
						{upperMarquee.map((image, index) => {
							return (
								<img
									key={index}
									className="max-h-[80px] mr-10"
									src={image}
									alt=""
								/>
							);
						})}
					</motion.div>
					<motion.div
						initial={{ x: 0 }}
						animate={{ x: "-100%" }}
						transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
						className="flex flex-shrink-0"
					>
						{upperMarquee.map((image, index) => {
							return (
								<img
									key={index}
									className="max-h-[80px] mr-10"
									src={image}
									alt=""
								/>
							);
						})}
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Marquee;
