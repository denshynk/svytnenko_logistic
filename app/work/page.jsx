"use client";

import Background from "@/components/Background";
import Marquee from "@/components/Marquee"
import MarqueeRev from "@/components/MarqueeRev"

const WorkWith = () => {
  return (
		<section className=" h-full overflow-x-hidden">
			<Background/>
			<div className="flex flex-col gap-[35px]">
				<Marquee />
				<MarqueeRev />
			</div>
		</section>
	);
}

export default WorkWith