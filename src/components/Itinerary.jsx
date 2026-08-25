import { useState, useEffect } from "react";

const initialItinerary = [
  // ...
];
function Itinerary() {
  const [openActivity, setOpenActivity] = useState(null);
  const getTodayTripDate = () => {
  const now = new Date();

  return now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const todayTripDate = getTodayTripDate();
  const [itinerary, setItinerary] = useState(() => {
  const saved = localStorage.getItem("japan-itinerary-v1");

  if (!saved) {
    return initialItinerary;
  }

  try {
    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed) || parsed.length === 0) {
      return initialItinerary;
    }

    return parsed;
  } catch {
    return initialItinerary;
  }
});

  // =============================
  // Toggle Checklist
  // =============================

  const toggleActivity = (dayIndex, activityIndex) => {
    const updated = itinerary.map((trip, currentDayIndex) => {
      if (currentDayIndex !== dayIndex) return trip;

      return {
        ...trip,
        activities: trip.activities.map(
          (activity, currentActivityIndex) => {
            if (currentActivityIndex !== activityIndex) {
              return activity;
            }

            return {
              ...activity,
              done: !activity.done,
            };
          }
        ),
      };
    });

    setItinerary(updated);
  };

  // =============================
  // Toggle Details
  // =============================

  const toggleDetails = (dayIndex, activityIndex) => {
    const activityId = `${dayIndex}-${activityIndex}`;

    setOpenActivity(
      openActivity === activityId ? null : activityId
    );
  };

  // =============================
  // Local Storage
  // =============================

  useEffect(() => {
    localStorage.setItem(
      "japan-itinerary-v1",
      JSON.stringify(itinerary)
    );
  }, [itinerary]);

  // =============================
  // Progress
  // =============================

  const totalActivities = itinerary.reduce(
    (total, trip) => total + trip.activities.length,
    0
  );

  const completedActivities = itinerary.reduce(
    (total, trip) =>
      total +
      trip.activities.filter(
        (activity) => activity.done
      ).length,
    0
  );

  const progress =
    totalActivities === 0
      ? 0
      : Math.round(
          (completedActivities / totalActivities) * 100
        );

  return (
    <section className="itinerary">

      <div className="section-title">
        <h2>Travel Itinerary</h2>
        <p>Your 6-Day Japan Adventure</p>
      </div>

      <div className="progress-card">
        <h3>🇯🇵 Japan Adventure Progress</h3>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p>
          {completedActivities} / {totalActivities} Places Visited ({progress}%)
        </p>
      </div>

      <div className="itinerary-grid">

        {itinerary.map((trip, dayIndex) => (

          <div
  className={
    trip.date === todayTripDate
      ? "day-card today-card"
      : "day-card"
  }
  key={trip.day}
>

            <h3>{trip.day}</h3>

            <p className="trip-date">
              <i className="fa-regular fa-calendar"></i>
              {trip.date}
            </p>

            <h4>
              <i className="fa-solid fa-location-dot"></i>
              {trip.city}
            </h4>

            <ul>

              {trip.activities.map(
                (activity, activityIndex) => {

                  const activityId =
                    `${dayIndex}-${activityIndex}`;

                  const isOpen =
                    openActivity === activityId;

                  return (
                    <li
                      key={`${trip.day}-${activity.name}`}
                      className="activity-item"
                    >

                      <input
                        type="checkbox"
                        checked={activity.done}
                        onChange={() =>
                          toggleActivity(
                            dayIndex,
                            activityIndex
                          )
                        }
                      />

                      <div className="activity-info">

                        <div
                          className="activity-main"
                          onClick={() =>
                            toggleDetails(
                              dayIndex,
                              activityIndex
                            )
                          }
                        >

                          <div className="activity-top">

                            <span className="activity-time">
                              {activity.time}
                            </span>

                            <span
                              className={
                                activity.done
                                  ? "activity-name activity-done"
                                  : "activity-name"
                              }
                            >
                              {activity.name}
                            </span>

                            {activity.status && (
                              <span
                                className={`activity-status status-${activity.status.toLowerCase()}`}
                              >
                                {activity.status}
                              </span>
                            )}

                            <span className="activity-arrow">
                              {isOpen ? "▲" : "▼"}
                            </span>

                          </div>

                          <div className="activity-meta">

                            <span>
                              <i className="fa-solid fa-location-dot"></i>
                              {activity.location}
                            </span>

                            <span>
                              <i className="fa-solid fa-train-subway"></i>
                              {activity.transport}
                            </span>

                          </div>

                        </div>

                        {isOpen && (
                          <div className="activity-details">

                            {activity.note && (
                              <p>
                                <i className="fa-solid fa-note-sticky"></i>
                                {activity.note}
                              </p>
                            )}

                            {activity.status && (
                              <p>
                                <i className="fa-solid fa-ticket"></i>
                                Status: {activity.status}
                              </p>
                            )}
                            <a
  className="maps-button"
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activity.location
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="fa-solid fa-map-location-dot"></i>
  Open in Google Maps
</a>
                            {!activity.note &&
                              !activity.status && (
                                <p>
                                  <i className="fa-solid fa-circle-info"></i>
                                  No additional information.
                                </p>
                              )}

                          </div>
                        )}

                      </div>

                    </li>
                  );
                }
              )}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Itinerary;