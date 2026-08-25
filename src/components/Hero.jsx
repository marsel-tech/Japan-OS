import { useEffect, useState } from "react";
import fuji from "../assets/fuji.jpg";

function Hero() {
  const tripStart = new Date("2026-08-27T00:00:00");
  const tripEnd = new Date("2026-09-02T00:00:00");

  const tripDays = [
    {
      date: "2026-08-27",
      day: "DAY 1",
      title: "TOKYO",
    },
    {
      date: "2026-08-28",
      day: "DAY 2",
      title: "MT. FUJI → GOTEMBA → SHINJUKU",
    },
    {
      date: "2026-08-29",
      day: "DAY 3",
      title: "TOKYO → OSAKA",
    },
    {
      date: "2026-08-30",
      day: "DAY 4",
      title: "KYOTO & NARA",
    },
    {
      date: "2026-08-31",
      day: "DAY 5",
      title: "OSAKA AMAZING PASS DAY",
    },
    {
      date: "2026-09-01",
      day: "DAY 6",
      title: "OSAKA",
    },
  ];

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = tripStart - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const getCurrentTripDay = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const today = `${year}-${month}-${day}`;

    return tripDays.find(
      (trip) => trip.date === today
    );
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  const [currentTripDay, setCurrentTripDay] =
    useState(getCurrentTripDay());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setCurrentTripDay(getCurrentTripDay());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToItinerary = () => {
    document
      .querySelector(".itinerary")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const now = new Date();
  const tripCompleted = now >= tripEnd;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${fuji})` }}
    >
      <div className="hero-content">

        <p className="hero-label">
          DEMINA GLORINTA • JAPAN 2026
        </p>

        <h1>
          MAKES EXPLORING JAPAN
          <br />
          EVEN MORE EXCITING
        </h1>

        {/* BEFORE TRIP */}

        {timeLeft && (
          <>
            <p className="countdown-title">
              🇯🇵 Japan Adventure Starts In
            </p>

            <div className="countdown">

              <div className="countdown-box">
                <strong>{timeLeft.days}</strong>
                <span>Days</span>
              </div>

              <div className="countdown-box">
                <strong>{timeLeft.hours}</strong>
                <span>Hours</span>
              </div>

              <div className="countdown-box">
                <strong>{timeLeft.minutes}</strong>
                <span>Minutes</span>
              </div>

              <div className="countdown-box">
                <strong>{timeLeft.seconds}</strong>
                <span>Seconds</span>
              </div>

            </div>
          </>
        )}

        {/* DURING TRIP */}

        {!timeLeft && currentTripDay && (
          <div className="current-trip">

            <span className="current-day">
              {currentTripDay.day}
            </span>

            <h2>
              {currentTripDay.title}
            </h2>

            <p>
              🇯🇵 Today's Japan Adventure
            </p>

          </div>
        )}

        {/* AFTER TRIP */}

        {!timeLeft &&
          !currentTripDay &&
          tripCompleted && (
            <div className="current-trip">

              <span className="current-day">
                COMPLETED
              </span>

              <h2>
                JAPAN ADVENTURE COMPLETE 🇯🇵
              </h2>

              <p>
                Thanks for the memories.
              </p>

            </div>
          )}

        <button onClick={scrollToItinerary}>
          Mulai Perjalanan
        </button>

      </div>
    </section>
  );
}

export default Hero;