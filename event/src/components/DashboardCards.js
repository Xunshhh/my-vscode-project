import React from 'react';
import { FaCalendarAlt, FaUserAlt } from 'react-icons/fa';

const DashboardCards = () => {
  const data = [
    {
      title: "Upcoming Events",
      count: 5,
      icon: <FaCalendarAlt />,
      bgColor: "#800000", // CPESS Maroon
      link: "#"
    },
    {
      title: "My Events",
      count: 3,
      icon: <FaUserAlt />,
      bgColor: "#2E8B57", // Complementary CPESS Green
      link: "#"
    }
  ];

  return (
    <div className="row">
      {data.map((card, index) => (
        <div className="col-md-6 col-lg-4 mb-4" key={index}>
          <div className="card shadow h-100 border-0 position-relative">
            <div
              className="position-absolute top-0 start-0 w-100"
              style={{ height: "5px", backgroundColor: card.bgColor }}
            ></div>

            <div className="card-body d-flex align-items-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: card.bgColor,
                  color: 'white',
                  fontSize: '1.5rem'
                }}
              >
                {card.icon}
              </div>

              <div>
                <h6 className="mb-1 fw-bold">{card.title}</h6>
                <p className="mb-2 text-muted">{card.count} event{card.count !== 1 ? 's' : ''}</p>
                <a href={card.link} className="btn btn-sm text-white" style={{ backgroundColor: card.bgColor }}>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
