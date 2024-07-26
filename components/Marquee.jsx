import { motion } from "framer-motion";

const Marquee = () => {
	const upperMarquee = [
		"/assets/logos/2.svg",
		"/assets/logos/15.png",
		"/assets/logos/4.png",
		"/assets/logos/5.png",
		"/assets/logos/6.png",
		"/assets/logos/7.png",
		"/assets/logos/8.png ",
		"/assets/logos/9.png",
		"/assets/logos/11.svg",
		"/assets/logos/13.svg",
		"/assets/logos/14.png",
	];
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
			}}
			className="mt-5 overflow-hidden"
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
								className="max-h-[100px] mr-10"
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
								className="max-h-[100px] mr-10"
								src={image}
								alt=""
							/>
						);
					})}
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Marquee;
