import data from "../../../data"
import Card from "../../Card/Card";

const Menu = () => {
  return (
    <>
      <div className="bookings mb-5">
        <h2>Our Menu</h2>
      </div>
      <section className="container my-4">
        <div className="my-3">
          <h2>Appetizers</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "appetizer" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>

        <div className="my-4">
          <h2>Main Dishes</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "main" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>

        <div className="my-4">
          <h2>Desserts</h2>
          <div className="special-body">
            {data.map((element, index) => {
              return element.type === "dessert" ? <Card key={index} data={element} /> : "";
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
