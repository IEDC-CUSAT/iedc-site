"use client";

import EventCard from "./EventCard";
import Event1 from "../../public/images/Event1.jpeg";
import Event2 from "../../public/images/event2.jpg";
import current from "../../public/images/makeaton.jpg";

const upcomingEvent = {
  heading:
    "CITTIC CUSAT proudly presents ✨ MAKE-A-TON 7.0 ✨ powered by Eduport!",
  description:
    "Time's ticking! Hack your way to the top by joining Make-A-Ton 7.0, Kerala's largest hackathon, partnered with MLH!       With a special track on 'Best Use of Conductor' sponsored by Orkes and other tracks by Eduport, GoDaddy, Auth0, Streamlit, Cloudflare, and more, our list of prizes never seems to end!⚡",
  icon: current,
  date: "19 & 20 October, 2024",
  link: "https://makeaton.in/",
  time: "10:00 PM",
  venue: "Seminar Complex,CUSAT",
};

const pastEvents = [
  {
    heading: "Innovate & Elevate: Empowering Entrepreneurs",
    description:
      "Gain insider insights, guidance from experts, and network with peers. Don't miss this opportunity to kickstart your entrepreneurial journey!",
    icon: Event1,
    date: "January 15, 2024",
    link: "https://www.google.com",
    time: "3:00 PM",
    venue: "Venue 1",
  },
  {
    heading:
      "Redbull basement powered by Make-A-Ton 7.0: Level Up Your Ideas !",
    description:
      "Got that creative spark buzzing like a rogue WiFi signal?  It’s time to take them global with Red Bull Basement !",
    icon: Event2,
    date: "February 10, 2024",
    link: "https://lu.ma/75lbvq9c",
    time: "5:00 PM",
    venue: "Venue 2",
  },
];

const Events = () => {
  return (
    <div
      className="flex flex-col bg-[#003c43] px-4 py-6 md:px-12 md:py-16"
      id="events"
    >
      <p className="w-full pb-4 text-center text-4xl font-normal uppercase !leading-tight text-[#ffffff] md:text-6xl">
        EVENTS
      </p>

      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
        Upcoming Event
      </h2>
      <div className="mb-8 rounded-lg bg-emerald-50 p-4">
        <EventCard
          heading={upcomingEvent.heading}
          icon={upcomingEvent.icon}
          date={upcomingEvent.date}
          description={upcomingEvent.description}
          venue={upcomingEvent.venue}
          time={upcomingEvent.time}
          link={upcomingEvent.link}
          index={0}
          buttonText="Register"
          showDetails={true}
        />
      </div>

      <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
        Past Events
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {pastEvents.map((event, index) => (
          <div key={index} className="rounded-lg bg-white p-4">
            <EventCard
              heading={event.heading}
              icon={event.icon}
              date={event.date}
              description={event.description}
              venue={event.venue}
              time={event.time}
              link={event.link}
              index={index + 1}
              buttonText="View Details"
              showDetails={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
