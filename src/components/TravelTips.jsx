function TravelTips() {
  const tips = [
    {
      icon: "fa-solid fa-train-subway",
      title: "Transportation",
      description:
        "Use Suica or ICOCA cards for convenient travel on trains and buses."
    },
    {
      icon: "fa-solid fa-wifi",
      title: "Internet",
      description:
        "Rent a pocket Wi-Fi or use an eSIM to stay connected throughout your trip."
    },
    {
      icon: "fa-solid fa-wallet",
      title: "Cashless Payment",
      description:
        "Most places accept credit cards, but always carry some cash for smaller shops."
    },
    {
      icon: "fa-solid fa-handshake",
      title: "Japanese Etiquette",
      description:
        "Be respectful, keep public spaces clean, and avoid talking loudly on trains."
    },
    {
      icon: "fa-solid fa-cloud-sun",
      title: "Weather",
      description:
        "Check the forecast before your trip and pack clothes suitable for the season."
    },
    {
      icon: "fa-solid fa-plug",
      title: "Power Adapter",
      description:
        "Japan uses Type A plugs with 100V electricity. Bring a universal adapter if needed."
    }
  ];

  return (
    <section className="travel-tips">

      <div className="section-title"> <i className="fa-solid fa-plane-departure travel-icon"></i>
       <h2>Travel Tips</h2> <p>Everything you need before exploring Japan.</p>
      </div>

      <div className="tips-grid">

        {tips.map((tip) => (
          <div className="tip-card" key={tip.title}>

            <i className={tip.icon}></i>

            <h3>{tip.title}</h3>

            <p>{tip.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default TravelTips;