import React from "react";
import Gallery from "./Gallery";

import * as motion from "motion/react-client";

const Main = () => {
  return (
    <main
      id="tours"
      className="px-[20px] pt-20 sm:px-[40px] lg:px-[50px] 2xl:px-[160px]"
    >
      <motion.h3
        className="text-color1 mb-3 text-5xl tracking-wide"
        initial={{ x: -100 }}
        whileInView={{ x: 0, transition: { duration: 0.3 } }}
        viewport={{ once: true }}
      >
        Lito-adventure bike tours
      </motion.h3>
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
        <motion.div className="flex flex-col items-start gap-5 text-2xl lg:max-w-[40%] lg:basis-[40%]">
          <motion.p
            className="font-lato mb-5 text-3xl font-bold xl:text-4xl"
            initial={{ x: -100 }}
            whileInView={{ x: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
          >
            Discover Zadar in the most fun and active way—with our guided bike
            tours!
          </motion.p>
          <motion.p
            className="font-lato text-2xl xl:text-3xl"
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
          >
            We’re a young, energetic team passionate about combining outdoor
            adventure with the rich history and beauty of our hometown. Our
            tours take you off the beaten path to explore coastal views,
            historic landmarks, and hidden gems—all while enjoying the freedom
            of two wheels.
          </motion.p>
          <motion.p
            className="font-lato text-2xl xl:text-3xl"
            initial={{ y: 100 }}
            whileInView={{ y: 0, transition: { duration: 0.3 } }}
            viewport={{ once: true }}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Whether you're a seasoned cyclist or just looking for a unique
            sightseeing experience, our tours are designed for all levels. Join
            us for a ride full of laughter, stories, and unforgettable views of
            Zadar like you’ve never seen before!
          </motion.p>
        </motion.div>
        <div className="bg-color1/10 max-w-full rounded-2xl p-3 lg:max-w-[55%] lg:basis-[55%]">
          <Gallery />
        </div>
      </div>
    </main>
  );
};

export default Main;
