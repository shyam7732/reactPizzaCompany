import "./App.css";
import data from "../public/data";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>FAST REACT PIZZA CO.</h1>
    </header>
  );
}

function Pizza({ name, ingredients, photo, price, soldOut }) {
  // console.log(props);
  return (
    <li className={`pizza ${soldOut ? "sold-out" : "something"}`}>
      <img src={photo} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{soldOut ? "SOLD OUT" : "$" + price}</p>
      </div>
    </li>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic italian cuisine, 6 creative dishes to choose from. all from
        our store owen. all organic. all delicious
      </p>

      <ul className="pizzas">
        {data.map((ePizza) => {
          return (
            <Pizza
              name={ePizza.name}
              ingredients={ePizza.ingredients}
              photo={ePizza.photoName}
              price={ePizza.price}
              soldOut={ePizza.soldOut}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Footer() {
  const openHr = 12;
  const closeHr = 22;

  const currHr = new Date().getHours();

  const isOpen = currHr >= openHr && currHr < closeHr;

  return isOpen ? (
    <Order closeHr={closeHr} />
  ) : (
    <div className="order">
      <p>
        We're Happy to welcome you between {openHr}:00 and {closeHr}:00
      </p>
    </div>
  );
}

function Order({ closeHr }) {
  return (
    <div className="footer">
      <div className="order">
        <p>We're open until {closeHr}:00, visit us to order online!</p>
        <button className="btn">Order</button>
      </div>
    </div>
  );
}
