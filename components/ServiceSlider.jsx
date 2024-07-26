
import { motion } from "framer-motion";
import React, { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Autoplay } from "swiper/modules";

import { BsArrowRight } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const services = [
	{
		num: "01",
		title: "deliver",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
		image: "/assets/work/delivery1.png",
	},
	{
		num: "02",
		title: "сборняк",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
		image: "/assets/work/delivery2.png",
	},
	{
		num: "03",
		title: "экмпедиции",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
		image: "/assets/work/delivery3.jpg",
	},
	{
		num: "04",
		title: "склад",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nam?",
		image: "/assets/work/licensed-image.jpeg",
	},
];

const ServiceSlider = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
			}}
			className="xl:w-[500px] w-[350px]"
		>
			<Swiper
				effect={"cube"}
				centeredSlides={true}
				speed={3000}
				autoplay={{
					delay: 5500,
					disableOnInteraction: false,
				}}
				cubeEffect={{
					shadow: true,
					slideShadows: true,
					shadowOffset: 20,
					shadowScale: 0.94,
				}}
				modules={[EffectCube, Autoplay]}
				className="mySwiper"
			>
				{services.map((service, index) => {
					return (
						<SwiperSlide key={index} className="xl:w-full">
							<div className="h-[350px] flex relative justify-center items-center bg-accent overflow-hidden">
								<Image
									src={service.image}
									fill
									className="object-cover brightness-50"
									alt=""
								/>
							</div>
							<div className="absolute bottom-10">
								<div className="flex">
									<h1 className="h1 ml-3 mr-3">{service.num} </h1>
									<h1 className="h1 capitalize"> {service.title}</h1>
								</div>
								<p className="ml-3">{service.text}</p>
							</div>
							<div className="absolue absolute top-0 w-full h-full overflow-hidden">
								<div className="absolute top-0 h-[7%] w-[100%]">
									<Image
										src="/assets/cargo.png"
										alt=""
										fill
										className="brightness-30 overflow-hidden"
									/>
									<h1 className="absolute top-1/2 left-full transform -translate-y-1/2 text-l text-white/60 animate-moveText whitespace-nowrap">
										SVYATNENKO logistic SVYATNENKO logistic SVYATNENKO logistic
										SVYATNENKO logistic SVYATNENKO logistic SVYATNENKO logistic
									</h1>
								</div>
								<div className="absolute w-[100%] h-[7%] bottom-0">
									<Image
										src="/assets/cargo.png"
										alt=""
										fill
										className="brightness-30 overflow-hidden"
									/>
									<h1 className="absolute top-1/2 left-full transform -translate-y-1/2 text-l text-white/70 animate-moveText whitespace-nowrap">
										SVYATNENKO logistic SVYATNENKO logistic SVYATNENKO logistic
										SVYATNENKO logistic SVYATNENKO logistic SVYATNENKO logistic
									</h1>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</motion.div>
	);
};

export default ServiceSlider;
