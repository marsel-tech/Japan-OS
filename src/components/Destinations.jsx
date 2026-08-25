import tokyo from "../assets/tokyotower.jpg";
import kyoto from "../assets/kyoto.jpg";
import osaka from "../assets/osaka.jpg";
import nara from "../assets/nara.jpg";

const destinations = [
  { name: "Tokyo",
    image: tokyo,
    description: "Modern city filled with technology, food and culture.",},
  { name: "Kyoto",
    image: kyoto,
    description: "Historic temples, shrines and beautiful bamboo forests.",},
  { name: "Osaka",
    image: osaka,
    description: "Japan's food paradise and vibrant nightlife.",},
  { name: "Nara",
    image: nara,
    description: "Meet the friendly deer and explore ancient temples.",},
];

function Destinations() {
  return (
    <section className="destinations">
      <div className="section-title">
        <h2>Popular Destinations</h2>
        <p>Discover Japan's most iconic places.</p>
      </div>

      <div className="destination-grid">
        {destinations.map((place) => (
          <div className="card" key={place.name}>
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;