import React, { useState } from 'react';
import EventCard from './EventCard';
import CreateEventForm from './CreateEventForm';

const initialEvents = [
  {
    date: "APR 21",
    title: "Embedded Systems Workshop",
    details: "📅 Date: 21 April",
    location: "ECE Lab, 9:30 AM",
    type: "upcoming"
  },
  {
    date: "MAY 4",
    title: "CPE Innovation Expo",
    details: "📅 May 4, 2025",
    location: "Engineering Auditorium",
    type: "upcoming"
  },
  {
    date: "SEP 19",
    title: "CPE Study Group",
    details: "📅 19 Sept, 2:30 PM",
    location: "Room 305",
    type: "my"
  },
  {
    date: "APR 16",
    title: "Cybersecurity Awareness Seminar",
    details: "📅 April 16",
    location: "Online via Zoom",
    type: "my"
  }
];

const AllEventsPage = ({ userRole }) => {
  const [events, setEvents] = useState(initialEvents);

  const handleCreateEvent = (newEvent) => {
    setEvents(prevEvents => [newEvent, ...prevEvents]);
  };

  return (
    <section className="container py-4">
      <header className="mb-4">
        <h2 className="text-center text-primary fw-bold">🖥️ Computer Engineering Event Planner</h2>
        <p className="text-center text-muted">
          Organize and discover events by the University of Batangas Computer Engineering Department
        </p>
      </header>

      {(userRole === 'admin' || userRole === 'faculty') && (
        <CreateEventForm onCreateEvent={handleCreateEvent} userRole={userRole} />
      )}

      <hr className="my-4" />

      <div className="row gy-4">
        {events.map((event, index) => (
          <EventCard
            key={`${event.title}-${event.date}-${index}`}
            date={event.date}
            title={event.title}
            details={event.details}
            location={event.location}
            type={event.type}
          />
        ))}
      </div>
    </section>
  );
};

export default AllEventsPage;
