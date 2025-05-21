import React, { useState } from 'react';
import { FaUserCircle, FaEnvelope, FaIdBadge, FaGraduationCap, FaEdit, FaSave } from 'react-icons/fa';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Rafael Salazar',
    email: 'johndoe@ub.edu.ph',
    studentId: '2021-CPEN-0420',
    program: 'BS Computer Engineering',
    profilePicture: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setFormData(user); // Reset edits if canceled
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center mb-4">CPESS Student Profile</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <div className="text-center mb-4">
                <img
                  src={formData.profilePicture}
                  alt="Profile"
                  className="rounded-circle shadow"
                  style={{ width: '130px', height: '130px', objectFit: 'cover' }}
                />
              </div>

              {isEditing ? (
                <form onSubmit={handleSave}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><FaUserCircle className="me-2" />Name</label>
                    <input type="text" id="name" className="form-control" value={formData.name} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"><FaEnvelope className="me-2" />Email</label>
                    <input type="email" id="email" className="form-control" value={formData.email} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="studentId" className="form-label"><FaIdBadge className="me-2" />Student ID</label>
                    <input type="text" id="studentId" className="form-control" value={formData.studentId} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="program" className="form-label"><FaGraduationCap className="me-2" />Program</label>
                    <input type="text" id="program" className="form-control" value={formData.program} onChange={handleChange} />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="profilePicture" className="form-label">Profile Picture URL</label>
                    <input type="text" id="profilePicture" className="form-control" value={formData.profilePicture} onChange={handleChange} />
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-success"><FaSave className="me-1" />Save</button>
                    <button type="button" className="btn btn-outline-secondary ms-2" onClick={handleEditToggle}>Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="px-3">
                  <p><FaUserCircle className="me-2" /><strong>Name:</strong> {user.name}</p>
                  <p><FaEnvelope className="me-2" /><strong>Email:</strong> {user.email}</p>
                  <p><FaIdBadge className="me-2" /><strong>Student ID:</strong> {user.studentId}</p>
                  <p><FaGraduationCap className="me-2" /><strong>Program:</strong> {user.program}</p>
                  <p><strong>Profile Picture URL:</strong> {user.profilePicture}</p>

                  <div className="text-end">
                    <button className="btn btn-primary" onClick={handleEditToggle}><FaEdit className="me-1" />Edit Profile</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
