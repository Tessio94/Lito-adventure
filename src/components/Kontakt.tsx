import React from "react";

const Kontakt = () => {
  return (
    <section
      id="contact"
      className="px-[20px] py-20 sm:px-[40px] lg:px-[50px] 2xl:px-[160px]"
    >
      <h3 className="text-color1 mb-8 text-5xl tracking-wide uppercase">
        Contact
      </h3>
      <div className="m-auto max-w-full md:max-w-[60%]">
        <form className="flex w-full flex-col gap-7">
          <div className="flex w-full items-center gap-4">
            <div className="flex basis-1/2 flex-col items-start">
              <label htmlFor="name" className="pl-3">
                Name
              </label>
              <input
                className="bg-color1/30 w-full rounded-xl px-3 py-2"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="flex basis-1/2 flex-col items-start">
              <label htmlFor="lastname" className="pl-3">
                Last name
              </label>
              <input
                className="bg-color1/30 w-full rounded-xl px-3 py-2"
                type="text"
                id="lastname"
                name="lastname"
              />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="phone" className="pl-3">
              Phone number
            </label>
            <input
              className="bg-color1/30 w-full rounded-xl px-3 py-2"
              type="tel"
              id="phone"
              name="phone"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email" className="pl-3">
              Email
            </label>
            <input
              className="bg-color1/30 w-full rounded-xl px-3 py-2"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="message" className="pl-3">
              Message
            </label>
            <textarea
              className="bg-color1/30 w-full rounded-xl px-3 py-2"
              id="message"
              name="message"
              rows={4}
              cols={50}
              placeholder="Write your request here..."
            ></textarea>
          </div>
          <button className="bg-color1 rounded-xl px-6 py-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Kontakt;
