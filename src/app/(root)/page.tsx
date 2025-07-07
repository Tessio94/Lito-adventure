import Cjenik from "@/components/Cjenik";
import Cover from "@/components/Cover";
import Kontakt from "@/components/Kontakt";
import Location from "@/components/Location";
import Main from "@/components/Main";
import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<>
			<Cover />
			<Main />
			<Cjenik />
			<Image
				className="pt-20"
				src="/zadar-zalazak.jpg"
				width={1920}
				height={500}
				alt="Zadar zalazak sunca"
			/>
			<Location />
			<Kontakt />
		</>
	);
};

export default page;
