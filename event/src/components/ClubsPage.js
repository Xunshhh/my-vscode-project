import React, { useState, useEffect } from 'react';
import ClubCard from './ClubCard'; // Ensure this is CPESS-themed (previous reply)

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [joinedClubs, setJoinedClubs] = useState([]);

  useEffect(() => {
    const fetchedClubs = [
      { id: 1, name: 'IoT Innovators', description: 'Explore Internet of Things projects and concepts.', membersCount: 34 },
      { id: 2, name: 'CodeForge', description: 'A programming club for CPESS coders and developers.', membersCount: 47 },
      { id: 3, name: 'Robotics Team', description: 'Hands-on robotics building and competitions.', membersCount: 29 },
      { id: 4, name: 'TechTalks UB', description: 'Weekly tech discussions and peer-led seminars.', membersCount: 21 },
    ];

    setClubs(fetchedClubs);
  }, []);

  const handleJoinLeave = (clubId) => {
    if (joinedClubs.includes(clubId)) {
      setJoinedClubs(joinedClubs.filter((id) => id !== clubId));
    } else {
      setJoinedClubs([...joinedClubs, clubId]);
    }
  };

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="text-maroon fw-bold mb-4">CPESS Clubs & Organizations</h2>

      {/* Search Input */}
      <div className="input-group mb-4">
        <span className="input-group-text bg-maroon text-white">🔍</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search Computer Engineering clubs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Club Cards */}
      <div className="row">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club) => {
            const isMember = joinedClubs.includes(club.id);
            return (
              <div key={club.id} className="col-md-6 col-lg-4 mb-4">
                <ClubCard
                  club={club}
                  isMember={isMember}
                  handleJoinLeave={handleJoinLeave}
                />
              </div>
            );
          })
        ) : (
          <p className="text-muted">No clubs found matching your search criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ClubsPage;
