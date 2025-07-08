import React from "react";

const Kontakt = () => {
	return (
		<section
			id="contact"
			className="py-20 px-[20px] sm:px-[40px] lg:px-[50px] 2xl:px-[160px]"
		>
			<h3 className="text-color1 text-5xl mb-8 tracking-wide">Kontakt</h3>
			<div className="max-w-[60%] m-auto">
				<form className="flex flex-col gap-7 w-full">
					<div className="flex items-center gap-4 w-full">
						<div className="flex flex-col items-start basis-1/2">
							<label htmlFor="name">Name</label>
							<input
								className="bg-color1/30 w-full rounded-xl"
								type="text"
								id="name"
								name="name"
							/>
						</div>
						<div className="flex flex-col items-start basis-1/2">
							<label htmlFor="lastname">Last name</label>
							<input
								className="bg-color1/30 w-full rounded-xl"
								type="text"
								id="lastname"
								name="lastname"
							/>
						</div>
					</div>
					<div className="flex flex-col items-start">
						<label htmlFor="phone">Phone number</label>
						<input
							className="bg-color1/30 w-full rounded-xl"
							type="tel"
							id="phone"
							name="phone"
						/>
					</div>
					<div className="flex flex-col items-start">
						<label htmlFor="email">Email</label>
						<input
							className="bg-color1/30 w-full rounded-xl"
							type="email"
							id="email"
							name="email"
						/>
					</div>
					<div className="flex flex-col items-start">
						<label htmlFor="message">Message</label>
						<textarea
							className="bg-color1/30 w-full rounded-xl p-2"
							id="message"
							name="message"
							rows={4}
							cols={50}
							placeholder="Write your request here..."
						></textarea>
					</div>
					<button className="bg-color1 py-2 px-6 rounded-xl" type="submit">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Kontakt;
