import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram } from "react-icons/ci";

const Footer = () => {
	return (
		<footer className="bg-color2/10 z-10 flex xl:flex-row flex-col gap-8 w-full max-w-[1920px] items-center justify-between px-[20px] py-5 sm:px-[40px] lg:px-[50px] 2xl:px-[160px]">
			<Link href="/">
				<Image
					className=""
					src="/footer-logo.svg"
					alt="Lito bike logo"
					width={150}
					height={243}
				/>
			</Link>
			<div className="text-color1 order-1 xl:order-0">
				Copyright © 2025 Lito Adventure - All Rights Reserved.
			</div>
			<div className="flex flex-col gap-4">
				<p className="text-2xl text-color1">
					<span className="text-color2">Location: </span>Ul. Dinka Šimunovića 9,
					23000, Zadar
				</p>
				<p className="text-2xl text-color1">
					<span className="text-color2">Mail: </span>
					<a
						href="mailto:dinodokozanikpalj@gmail.com"
						target="_blank"
						className="relative after:content-[''] after:absolute after:left-0 after:top-[100%] after:bg-color2 after:h-[2px] after:right-[100%] hover:after:right-0 after:transition-all after:duration-500"
					>
						dinodokozanikpalj@gmail.com
					</a>
				</p>
				<div className="flex items-center justify-center gap-6">
					<a
						href="https://www.facebook.com/people/Lito-Adventure/61574576488699/#"
						target="_blank"
						className="text-color1 bg-color2/50 p-1 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500"
					>
						<CiFacebook className="text-3xl text-color1" />
					</a>
					<a
						href=""
						target="_blank"
						className="text-color1 bg-color2/50 p-1 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500"
					>
						<CiInstagram className="text-3xl text-color1" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
