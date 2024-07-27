"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {} from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ServicesSliderBtns from "@/components/ServicesSliderBtns";

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

const Services = () => {
	const [service, setService] = useState(services[0]);

	const handleSlideChange = (swiper) => {
		const currentIndex = swiper.activeIndex;
		setService(services[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							<div className="text-8xl leading-none font-extralight">
								{service.num}
							</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
								{service.title}
							</h2>
							<p className="text-white/60 ">{service.text}</p>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{services.map((item, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											<div className="relative h-full w-full">
												<Image
													src={service.image}
													fill
													className="object-cover"
													alt=""
													style={{ pointerEvents: "none" }}
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							<ServicesSliderBtns/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Services;
