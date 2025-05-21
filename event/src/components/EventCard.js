import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const EventCard = ({ date, title, details, location, type, onRSVP }) => {
  const isUpcoming = type === 'upcoming';

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow h-100 border-0 event-card">
        <div className="card-body d-flex flex-column justify-content-between">
          {/* Top Section with Date and Type */}
          <div className="d-flex justify-content-between align-items-start mb-3">
            <span className={`badge bg-${isUpcoming ? 'danger' : 'success'} text-uppercase`}>
              <FaCalendarAlt className="me-1" />
              {date}
            </span>
            <span className={`badge bg-${isUpcoming ? 'warning' : 'secondary'} text-white`}>
              {isUpcoming ? 'Upcoming' : 'My Event'}
            </span>
          </div>

          {/* Title and Details */}
          <div>
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted small">{details}</p>
          </div>

          {/* Location */}
          <div className="d-flex align-items-center text-muted small mb-3">
            <FaMapMarkerAlt className="me-2" />
            <span>{location}</span>
          </div>

          {/* Action Buttons */}
          <div className="d-flex justify-content-between">
            <button className="btn btn-sm btn-primary" onClick={onRSVP}>
              RSVP
            </button>
            <button className="btn btn-sm btn-outline-dark">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
