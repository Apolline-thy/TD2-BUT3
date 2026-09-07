import Card from "./components/Card";
import Button from "./components/Button";
import data from "./data/data";

function App() {
  return (
    <>
    <section className="bg-clr-primary">
    <h1>Our pricing</h1>
    <ul>

    {data.map((plan) => (
      <li key={plan.id}>
        <Card
          title={plan.title}
          price={plan.price}
          storage={plan.storage}
          users={plan.users}
          upside={plan.upside}  

        />
      </li>
    ))}
    </ul>
   </section>
    </>
  );
}

export default App;