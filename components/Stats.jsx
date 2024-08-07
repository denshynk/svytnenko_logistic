"use client";

import CountUp from "react-countup";

const stats = [
	{
		num: 15,
		text: "Years of experience",
	},
	{
		num: 165,
		text: "Transportation per year",
	},
	{
		num: 1245,
		text: "Satisfied customers",
	},
	{
		num: 100,
		text: "Satisfied customers",
	},
];

const Stats = () => {
	return (
		<section>
			<div className="container mx-auto xl:pt-8">
				<div className="flex justify-center flex-wrap xl:flex-nowrap gap-6 max-w-[80vh] mx-auto xl:maw-w-none">
					{stats.map((item, index) => {
						return (
							<div
								className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
								key={index}
							>
								<CountUp
									end={item.num}
									duration={5}
									delay={2}
									className="text-4xl xl:text-6xl font-extrabolt"
								/>
								<p
									className={`${
										item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
									} leading-snug text-white/80`}
								>
									{item.text}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Stats;
