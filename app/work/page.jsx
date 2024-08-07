"use client";

import Marquee from "@/components/Marquee"
import MarqueeRev from "@/components/MarqueeRev"

const WorkWith = () => {
  return (
		<section className=" h-full overflow-x-hidden">
			<div className="overflow-visiable flex flex-col gap-[35px]">
				<Marquee />
				<MarqueeRev />
				<Marquee />
				<MarqueeRev />
			</div>
		</section>
	);
}

export default WorkWith