import Card from "./components/Card";
import Button from "./components/Button";
import data from "./data/data";
import Toggle from "./components/Toggle";
import { useState } from "react";

function App() {
  const [isMonthly, setIsMonthly] = useState(false);
  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <>
      <section className="flex flex-row">
        <h1 className="flex justify-center text-2xl font-bold">Our pricing</h1>
        <Toggle active={isMonthly} onChange={handleToggle}></Toggle>

        <ul className="flex flex-row justify-center gap-4">
          {data.map((plan) => (
            <li key={plan.id} className="flex flex-col">
              <Card
                id={plan.id}
                title={plan.title}
                price={plan.price}
                storage={plan.storage}
                users={plan.users}
                upside={plan.upside}
                active={plan.active}
                monthlyPrice={plan.monthlyPrice}
                annualPrice={plan.annualPrice}
                isMonthly={isMonthly}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
