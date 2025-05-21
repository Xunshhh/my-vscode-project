import React, { useState } from 'react';
import EventCard from './EventCard'; // Reusable EventCard component

const JoinedEventsPage = () => {
  const initialEvents = [
    { id: 1, title: 'Tech Seminar', date: '2023-12-01', location: 'Room 101', details: 'A tech seminar discussing AI.' },
    { id: 2, title: 'Music Concert', date: '2023-12-05', location: 'Auditorium', details: 'A live music event.' },
    { id: 3, title: 'Coding Bootcamp', date: '2023-12-10', location: 'Room 202', details: 'A bootcamp for new programmers.' },
  ];

  const [joinedEvents, setJoinedEvents] = useState([]);

  const handleJoinEvent = (eventId) => {
    if (!joinedEvents.includes(eventId)) {
      setJoinedEvents(prev => [...prev, eventId]);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-bold">🎟️ Your Joined Events</h2>
      <div className="row">
        {initialEvents.map((event) => (
          <EventCard
            key={event.id}
            date={event.date}
            title={event.title}
            details={event.details}
            location={event.location}
            type={joinedEvents.includes(event.id) ? 'joined' : 'available'}
            onRSVP={() => handleJoinEvent(event.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinedEventsPage;
