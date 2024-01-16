import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  return (
    <main>
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella , Tomato, mozarella , spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price="10"
      ></Pizza>
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price="12"
      ></Pizza>
    </main>
  );
}

function Pizza(props) {
  return (
    <div>
      <img src={props.photoName} alt={props.name}></img>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  const openText = isOpen ? "We're currently open!!!" : "We are close";
  return (
    <footer>
      {new Date().toLocaleTimeString()}. {openText}
    </footer>
  );
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
