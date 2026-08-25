import sushi from "../assets/sushi.jpg";
import ramen from "../assets/ramen.jpg";
import wagyu from "../assets/wagyu.jpg";
import dango from "../assets/dango.jpg";
import matcha from "../assets/matcha-optimized.jpg";
import bento from "../assets/bento.jpg";

const foods = [
 {
  image: sushi,
  name: "Sushi",
  city: "Tokyo",
  rating: "4.9",
  label: "🍣 JAPANESE",
  description: "Fresh seafood served with perfectly seasoned rice."
},
  {
    image: ramen,
    name: "Ramen",
    city: "Fukuoka",
    rating: "4.9",
    label: "🍜 POPULAR",
    description: "Rich tonkotsu broth with handmade noodles."
  },
  {
    image: wagyu,
    name: "Wagyu Beef",
    city: "Kobe",
    rating: "5.0",
    label: "🥩 PREMIUM",
    description: "Premium Japanese beef with exceptional marbling."
  },
  {
    image: dango,
    name: "Dango",
    city: "Kyoto",
    rating: "4.7",
    label: "🌸 SWEET",
    description: "Sweet rice dumplings loved across Japan."
  },
  {
    image: matcha,
    name: "Matcha Dessert",
    city: "Uji",
    rating: "4.8",
    label: "🍵 TRADITIONAL",
    description: "Authentic green tea desserts with rich flavor."
  },
  {
    image: bento,
    name: "Bento",
    city: "Osaka",
    rating: "4.8",
    label: "🍱 LOCAL FAVORITE",
    description: "A complete Japanese meal packed beautifully."
  }
];

function Foods() {
  return (
    <section className="foods">

      <div className="section-title">

        <i className="fa-solid fa-utensils travel-icon"></i>

        <h2>Must Try Japanese Foods</h2>

        <p>Taste the authentic flavors of Japan.</p>

      </div>

      <div className="foods-grid">

        {foods.map((food) => (

          <div className="food-card">
           <span className="food-badge">
            {food.label}
           </span>
           <img src={food.image} alt={food.name} />
           <div className="food-content">

              <h3>{food.name}</h3>

              <div className="food-rating">

                ⭐ {food.rating}

              </div>

              <p className="food-city">

                <i className="fa-solid fa-location-dot"></i>

                {" "}

                {food.city}

              </p>

              <p>{food.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Foods;