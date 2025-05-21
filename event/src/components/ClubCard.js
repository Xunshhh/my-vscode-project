import React from 'react';

const ClubCard = ({ club, isMember, handleJoinLeave }) => {
  return (
    <div className="card mb-4 shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title text-maroon fw-bold">{club.name}</h5>
        <p className="card-text text-muted">
          {club.description || "No description provided for this club."}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className={`btn ${isMember ? 'btn-outline-maroon' : 'btn-maroon'}`}
            onClick={() => handleJoinLeave(club.id)}
          >
            {isMember ? 'Leave CPESS Club' : 'Join CPESS Club'}
          </button>
          <span className="badge bg-light text-dark border border-secondary">
            👥 {club.membersCount} members
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
