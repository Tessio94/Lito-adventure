import React from "react";

const Location = () => {
  return (
    <section id="location" className="pt-20">
      <h5 className="text-color1 text-5xl mb-3 px-[20px] py-3 sm:px-[40px] lg:px-[50px] 2xl:px-[160px] tracking-wide">
        Location
      </h5>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2864.976700061051!2d15.232307790318279!3d44.10447274857976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761fa5f935ce151%3A0x16471ac9b15033cb!2sUl.%20Dinka%20%C5%A0imunovi%C4%87a%209%2C%2023000%2C%20Zadar!5e0!3m2!1shr!2shr!4v1751894752526!5m2!1shr!2shr"
          width="600"
          height="450"
          // style="border:0;"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
