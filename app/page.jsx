"use client";

import Marquee from "@/components/Marquee";
import ServiceSlider from "@/components/ServiceSlider";
import Stats from "@/components/Stats";

const Home = () => {
	return (
		<section className="h-full overflow-x-hidden">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between pb-8 xl:pt-8 xl:pb-24">
					<div className="text-center xl:text-left">
						{/* <span className="text-3xl">
							International <br />
							logistic
						</span> */}
						<h1 className="h1 pt-5 pb-5">
							The best choise <br />
							to deliver cargo <br />
							on time
							<br />
							<span className="text-accent">by Svyatnenko</span>
						</h1>
						<p></p>
					</div>
					<ServiceSlider />
				</div>
			</div>
			<Marquee />
			<Stats />
		</section>
	);
};

export default Home;
