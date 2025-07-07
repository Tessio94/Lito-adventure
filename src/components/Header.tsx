import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram, CiMobile3 } from "react-icons/ci";

const Header = () => {
	return (
		<header className="absolute z-10 flex w-full max-w-[1920px] items-center justify-between px-[20px] py-3 sm:px-[50px] lg:px-[60px] 2xl:px-[160px]">
			<Link href="/">
				<Image
					className=""
					src="/header-logo.svg"
					alt="Lito bike logo"
					width={200}
					height={88}
				/>
			</Link>

			<nav>
				<ul className="flex items-center xl:gap-20 lg:gap-10">
					<li>
						<a
							href="#bicikle"
							className="relative cursor-pointer text-2xl font-bold capitalize text-color1 bg-color2/50 p-2 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500 tracking-widest"
						>
							Tours
						</a>
					</li>
					<li>
						<a
							href="#onama"
							className="relative cursor-pointer text-2xl font-bold capitalize text-color1 bg-color2/50 p-2 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500 tracking-widest"
						>
							Pricing
						</a>
					</li>
					<li>
						<a
							href="#lokacija"
							className="relative cursor-pointer text-2xl font-bold capitalize text-color1 bg-color2/50 p-2 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500 tracking-widest"
						>
							Location
						</a>
					</li>
					<li>
						<a
							href="#kontakt"
							className="relative cursor-pointer text-2xl font-bold capitalize text-color1 bg-color2/50 p-2 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500 tracking-widest"
						>
							Contact
						</a>
					</li>
				</ul>
			</nav>

			<div className="flex flex-col gap-5">
				<div className="text-color1 bg-color2/50 py-1 px-2 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500">
					<a
						href="tel:+095 876 1857"
						className="cursor-pointer text-2xl font-bold capitalize flex items-center gap-3 text-color1 tracking-wider"
					>
						<CiMobile3 className="text-3xl text-color1" />
						+095 876 1857
					</a>
				</div>
				<div className="flex items-center justify-center gap-4">
					<a
						href="https://www.facebook.com/people/Lito-Adventure/61574576488699/#"
						target="_blank"
						className="text-color1 bg-color2/50 p-1 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500"
					>
						<CiFacebook className="text-3xl text-color1" />
					</a>
					<a
						href=""
						className="text-color1 bg-color2/50 p-1 rounded-2xl backdrop-blur-sm border-2 border-transparent hover:border-color1  transition-all duration-500"
					>
						<CiInstagram className="text-3xl text-color1" />
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
