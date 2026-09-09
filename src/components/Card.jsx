import Button from "./Button";

function Card({ id, title, price, storage, users, upside, active, monthlyPrice, annualPrice, isMonthly }) {
  const cardClass = active ? "bg-bg text-white" : "bg-white";
  const displayPrice = isMonthly ? monthlyPrice : annualPrice;
  return (
    <section className={`flex flex-col items-center justify-center rounded-lg  ${cardClass} p-2 shadow-md `}>
      <div className="flex flex-col items-center justify-center gap-2 p-4">
      <p className="text-lg">{title}</p>
      <h1 className="text-5xl font-bold">{displayPrice}</h1>
      </div>
      <ul className="m-4 flex flex-col items-center p-4 text-sm ">
        <li>{storage}</li>
        <li>{users}</li>
        <li>{upside}</li>
      </ul>

      <Button active={active}>Learn more</Button>
    </section>
  );
}

export default Card;
