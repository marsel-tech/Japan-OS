import { useState, useEffect } from "react";

const initialItinerary = [
  {
    day: "Day 1",
    date: "27 Aug 2026",
    city: "Tokyo",
    activities: [
      {
        time: "08:00",
        name: "Leave Accommodation",
        location: "Itabashi",
        transport: "Walk",
        done: false,
      },
      {
        time: "08:00–09:00",
        name: "Travel to Tokyo Tower",
        location: "Itabashi → Tokyo Tower",
        transport: "Train / Metro",
        done: false,
      },
      {
        time: "09:00–10:15",
        name: "Tokyo Tower Photo Spot",
        location: "Parking Center Stairs → Shiba Park / Zojo-ji",
        transport: "Walk",
        done: false,
      },
      {
        time: "10:15–10:45",
        name: "Travel to Harajuku",
        location: "Tokyo Tower → Harajuku",
        transport: "Metro",
        done: false,
      },
      {
        time: "10:45–12:00",
        name: "Harajuku & Takeshita Street",
        location: "Harajuku",
        transport: "Walk",
        note: "Thrift hunting",
        done: false,
      },
      {
        time: "12:00–13:00",
        name: "Lunch",
        location: "Harajuku",
        transport: "Walk",
        done: false,
      },
      {
        time: "13:00–15:30",
        name: "Cat Street & Streetwear Hunting",
        location: "Cat Street",
        transport: "Walk",
        note: "ABC-MART → Vans → Thrift / Streetwear Stores",
        done: false,
      },
      {
        time: "15:30–17:00",
        name: "Omotesando",
        location: "Omotesando",
        transport: "Walk",
        done: false,
      },
      {
        time: "17:00+",
        name: "Free Time",
        location: "Tokyo",
        transport: "Flexible",
        note: "Shopping / Dinner",
        done: false,
      },
    ],
  },
  {
    day: "Day 2",
    date: "28 Aug 2026",
    city: "Mt. Fuji → Gotemba → Shinjuku",
    activities: [
      {
        time: "07:00",
        name: "Private Mt. Fuji Tour",
        location: "Nishi-sugamo Station",
        transport: "Private Car",
        note: "Pickup",
        done: false,
      },
      {
        time: "09:00",
        name: "Lake Yamanaka",
        location: "Yamanakako",
        transport: "Private Car",
        done: false,
      },
      {
        time: "09:50",
        name: "Oshino Hakkai",
        location: "Oshino",
        transport: "Private Car",
        done: false,
      },
      {
        time: "11:20",
        name: "Oishi Park",
        location: "Lake Kawaguchi",
        transport: "Private Car",
        done: false,
      },
      {
        time: "12:05",
        name: "Lawson Kawaguchiko",
        location: "Kawaguchiko",
        transport: "Private Car",
        note: "Quick photo stop",
        done: false,
      },
      {
        time: "12:40",
        name: "Chureito Pagoda",
        location: "Arakurayama Sengen Park",
        transport: "Private Car",
        done: false,
      },
      {
        time: "14:30–16:00",
        name: "Gotemba Premium Outlets",
        location: "Gotemba",
        transport: "Private Car",
        note: "Shopping",
        done: false,
      },
      {
        time: "18:30+",
        name: "Kabukicho & Omoide Yokocho",
        location: "Shinjuku",
        transport: "Private Car / Walk",
        note: "Dinner & night walk",
        done: false,
      },
    ],
  },
  {
    day: "Day 3",
    date: "29 Aug 2026",
    city: "Tokyo → Osaka",
    activities: [
      {
        time: "07:30",
        name: "Senso-ji Temple",
        location: "Asakusa",
        transport: "Tokyo Metro",
        done: false,
      },
      {
        time: "09:45",
        name: "Ginza",
        location: "Ginza",
        transport: "Tokyo Metro",
        done: false,
      },
      {
        time: "11:30",
        name: "Shibuya",
        location: "Shibuya",
        transport: "JR / Metro",
        done: false,
      },
      {
        time: "13:00",
        name: "Shibuya Sky",
        location: "Shibuya",
        transport: "Walk",
        done: false,
      },
      {
        time: "Night",
        name: "Travel to Osaka",
        location: "Tokyo → Osaka",
        transport: "Night Bus / Train",
        done: false,
      },
    ],
  },
  {
    day: "Day 4",
    date: "30 Aug 2026",
    city: "Kyoto & Nara",
    activities: [
      {
        time: "08:00",
        name: "Fushimi Inari Taisha",
        location: "Kyoto",
        transport: "JR",
        done: false,
      },
      {
        time: "11:00",
        name: "Arashiyama Bamboo Forest",
        location: "Kyoto",
        transport: "JR",
        done: false,
      },
      {
        time: "15:00",
        name: "Nara Park",
        location: "Nara",
        transport: "JR",
        done: false,
      },
    ],
  },
  {
    day: "Day 5",
    date: "31 Aug 2026",
    city: "Osaka — Amazing Pass Day",
    activities: [
      {
        time: "08:15",
        name: "Leave Accommodation",
        location: "Namba / Dotonbori Area",
        transport: "Walk",
        note: "Start from guest house area",
        done: false,
      },
      {
        time: "08:15–09:00",
        name: "Travel to Umeda",
        location: "Namba (M20) → Umeda (M16)",
        transport: "Osaka Metro — Midosuji Line",
        note: "Osaka Amazing Pass • Unlimited Ride",
        status: "OAP",
        done: false,
      },
      {
        time: "09:00–10:30",
        name: "Umeda Sky Building",
        location: "Umeda",
        transport: "Walk",
        note: "Osaka Amazing Pass • Enter before 15:00",
        status: "OAP",
        done: false,
      },
      {
        time: "10:30–11:00",
        name: "Travel to Tenjinbashisuji",
        location: "Higashi-Umeda (T20) → Tenjimbashisuji 6-chome (T18)",
        transport: "Osaka Metro — Tanimachi Line",
        note: "Osaka Amazing Pass • Unlimited Ride",
        status: "OAP",
        done: false,
      },
      {
        time: "11:00–12:15",
        name: "Osaka Museum of Housing and Living",
        location: "Tenjimbashisuji 6-chome (T18/K11)",
        transport: "Walk",
        note: "Osaka Amazing Pass",
        status: "OAP",
        done: false,
      },
      {
        time: "12:15–13:00",
        name: "Lunch",
        location: "Tenjinbashisuji",
        transport: "Walk",
        note: "Lunch around Tenjinbashisuji Shopping Street",
        done: false,
      },
      {
        time: "13:00–13:30",
        name: "Travel to Osaka Castle",
        location: "Tenjimbashisuji 6-chome (T18) → Tanimachi 4-chome (T23)",
        transport: "Osaka Metro — Tanimachi Line",
        note: "Osaka Amazing Pass • Unlimited Ride",
        status: "OAP",
        done: false,
      },
      {
        time: "13:30–15:00",
        name: "Osaka Castle Museum",
        location: "Osaka Castle",
        transport: "Walk",
        note: "Osaka Amazing Pass",
        status: "OAP",
        done: false,
      },
      {
        time: "15:00–15:45",
        name: "Travel to Shinsekai",
        location: "Tanimachi 4-chome (T23) → Tennoji (T27) → Dobutsuen-mae (M22)",
        transport: "Osaka Metro — Tanimachi + Midosuji Line",
        note: "Osaka Amazing Pass • Unlimited Ride",
        status: "OAP",
        done: false,
      },
      {
        time: "15:45–17:00",
        name: "Tsutenkaku Tower",
        location: "Shinsekai",
        transport: "Walk",
        note: "Osaka Amazing Pass • Check same-day entry slot",
        status: "OAP",
        done: false,
      },
      {
        time: "17:00–18:00",
        name: "Explore Shinsekai",
        location: "Shinsekai",
        transport: "Walk",
        note: "Food & photo time",
        done: false,
      },
      {
        time: "18:00–18:30",
        name: "Travel to Dotonbori",
        location: "Dobutsuen-mae (M22) → Namba (M20)",
        transport: "Osaka Metro — Midosuji Line",
        note: "Osaka Amazing Pass • Unlimited Ride",
        status: "OAP",
        done: false,
      },
      {
        time: "18:30–19:00",
        name: "Tombori River Cruise",
        location: "Dotonbori",
        transport: "Walk",
        note: "Osaka Amazing Pass • Secure same-day cruise slot",
        status: "OAP",
        done: false,
      },
      {
        time: "19:00+",
        name: "Dotonbori & Shinsaibashi",
        location: "Namba / Dotonbori",
        transport: "Walk",
        note: "Dinner, shopping & free time • Near accommodation",
        done: false,
      },
    ],
  },
  {
    day: "Day 6",
    date: "1 Sep 2026",
    city: "Osaka",
    activities: [
      {
        time: "Morning",
        name: "Kuromon Market",
        location: "Namba",
        transport: "Walk / Metro",
        done: false,
      },
      {
        time: "Morning",
        name: "Namba Yasaka Shrine",
        location: "Namba",
        transport: "Walk",
        done: false,
      },
      {
        time: "Later",
        name: "Flight to Singapore",
        location: "Kansai Airport",
        transport: "Airport Train / Bus",
        done: false,
      },
    ],
  },
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