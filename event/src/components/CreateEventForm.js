import React, { useState } from 'react';

const CreateEventForm = ({ onCreateEvent, userRole }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    type: 'upcoming',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, date, location } = formData;

    if (!title.trim() || !date || !location.trim()) {
      alert('Please fill in all required fields.');
      return;
    }

    onCreateEvent(formData);
    setFormData({
      title: '',
      description: '',
      date: '',
      location: '',
      type: 'upcoming',
    });
  };

  if (userRole !== 'teacher' && userRole !== 'admin') {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          <strong>Access Denied:</strong> You do not have permission to create events.
        </div>
      </div>
    );
  }

  return (
    <div className="container bg-light p-4 rounded mt-4 shadow-sm">
      <h4 className="text-maroon fw-bold mb-3">Create a New Event</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Event Title <span className="text-danger">*</span></label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="e.g., CPESS Seminar 2025"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Event Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="What is the event about?"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Event Date <span className="text-danger">*</span></label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Event Location <span className="text-danger">*</span></label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-control"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., UB Lipa AVR 1"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="form-label">Event Type</label>
          <select
            id="type"
            name="type"
            className="form-select"
            value={formData.type}
            onChange={handleInputChange}
          >
            <option value="upcoming">Upcoming</option>
            <option value="my">My Event</option>
          </select>
        </div>

        <button type="submit" className="btn btn-maroon px-4">
          📅 Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEventForm;
