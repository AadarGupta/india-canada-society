import EventCard from "@/components/EventCard";
import { NEW_EVENTS, PAST_EVENTS } from "@/constants";
import React from "react";

const Events = () => {
  return (
    <section className="w-full mx-auto py-12">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          Upcoming Events
        </h1>

        {/*
        {NEW_EVENTS.length > 0 && (
          <div className="px-[100px] py-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {" "}
            {NEW_EVENTS.map((newEvent, index) => (
              <EventCard key={index} {...newEvent} />
            ))}
          </div>
        )}
        */}
        <p className="pb-12 pt-6">
          No upcoming events as of now. Please stay tuned!
        </p>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          Past Events
        </h1>
        <div className="px-[100px] py-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {PAST_EVENTS.length > 0 &&
            PAST_EVENTS.map((pastEvent, index) => (
              <EventCard key={index} {...pastEvent} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
