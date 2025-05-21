import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import DashboardCards from './DashboardCards';
import { FaPlusCircle, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const MainDashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [myEvents, setMyEvents] = useState([]);

  // Simulated fetch logic for events
  useEffect(() => {
    // Replace with actual API fetch in production
    setUpcomingEvents([
      {
        date: '2025-05-20',
        title: 'Seminar on AI',
        details: 'Explore AI integration in embedded systems.',
        location: 'CPESS Room 101',
        type: 'upcoming',
      },
      {
        date: '2025-05-22',
        title: 'Tech Workshop',
        details: 'Hands-on C++ & microcontroller prototyping.',
        location: 'CPESS Lab 102',
        type: 'upcoming',
      },
    ]);

    setMyEvents([
      {
        date: '2025-05-15',
        title: 'CE Club General Assembly',
        details: 'Monthly planning and progress sync.',
        location: 'Innovation Hub 103',
        type: 'my',
      },
    ]);
  }, []);

  return (
    <div className="col-md-10">
      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="px-4 mt-5">
          <h4 className="mb-3 text-danger d-flex align-items-center">
            <FaCalendarAlt className="me-2" />
            Upcoming CPESS Events
          </h4>
          <div className="row">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={`upcoming-${index}`}
                date={event.date}
                title={event.title}
                details={event.details}
                location={event.location}
                type="upcoming"
              />
            ))}
          </div>
        </section>
      )}

      {/* My Events Section */}
      {myEvents.length > 0 && (
        <section className="px-4 mt-5">
          <h4 className="mb-3 text-success d-flex align-items-center">
            <FaUsers className="me-2" />
            My Organized Events
          </h4>
          <div className="row">
            {myEvents.map((event, index) => (
              <EventCard
                key={`my-${index}`}
                date={event.date}
                title={event.title}
                details={event.details}
                location={event.location}
                type="my"
              />
            ))}
          </div>
        </section>
      )}

      {/* Fallback: No Events Available */}
      {upcomingEvents.length === 0 && myEvents.length === 0 && (
        <section className="px-4 mt-5 text-center">
          <h5 className="text-muted mb-3">No events available yet.</h5>
          <p className="text-secondary">
            Join technical seminars, coding workshops, or organize a new event with your peers!
          </p>
          <button className="btn btn-primary" title="Create a new CPESS event">
            <FaPlusCircle className="me-2" />
            Create Event
          </button>
        </section>
      )}
    </div>
  );
};

export default MainDashboard;
