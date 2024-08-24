"use client";

import Background from "@/components/Background";
import Marquee from "@/components/Marquee";
import ServiceSlider from "@/components/ServiceSlider";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import splitString from "@/utils/splitString";
import { motion } from "framer-motion";

const charVariants = {
	hidden: { opacity: 0 },
	reveal: { opacity: 1 },
};

const mainttext1 = "Logistics company";
const mainttext2 = "Svyatnenko Sergei";

const Home = () => {
	const headingChar = splitString(mainttext1);
	const headingChar2 = splitString(mainttext2);

	return (
		<section className="h-full overflow-visible">
			<Background />
			<div className="container mx-auto h-full">
				<div className="flex flex-col items-center justify-between pb-8">
					<div className="text-center">
						<motion.h1
							className="h1 pt-5 pb-5"
							initial="hidden"
							animate="reveal"
							variants={charVariants}
							transition={{ staggerChildren: 0.02, delayChildren: 2 }}
						>
							{headingChar.map((char) => (
								<motion.span
									key={char}
									variants={charVariants}
									transition={{ duration: 1 }}
								>
									{char}
								</motion.span>
							))}
							<br />
							<motion.span
								className="text-accent"
								initial="hidden"
								animate="reveal"
								variants={charVariants}
								transition={{ staggerChildren: 0.015, delayChildren: 3 }}
							>
								{headingChar2.map((char) => (
									<motion.span
										key={char}
										variants={charVariants}
										transition={{ duration: 1 }}
									>
										{char}
									</motion.span>
								))}
							</motion.span>
						</motion.h1>
					</div>
				</div>
			</div>
			<Services />
			{/* Новый фрейм с Marquee и контактами */}
			<div className="mt-20 xl:mt-2">
				<Marquee className="" />

				<div className="container mx-auto py-28">
					<h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
					<div className="flex flex-col items-center space-y-4">
						<p className="font-mavka">Phone: +380 (67) 465-9106</p>
						<p className="font-mavka">Email: sergey@svyatnenko.com.ua</p>
						<p className="font-mavka">Address: Kyiv, Ukraine</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
