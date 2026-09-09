import Button from "./Button";

function Card({ id, title, price, storage, users, upside, active, monthlyPrice, annualPrice, isMonthly }) {
  const cardClass = active ? "bg-bg text-white" : "bg-white";
  const displayPrice = isMonthly ? monthlyPrice : annualPrice;
  return (
    <section className={`flex flex-col items-center justify-center rounded-lg  ${cardClass} p-2 shadow-md `}>
      <p className="text-lg font-semibold">{title}</p>
      <h1 className="text-4xl font-bold">{price}</h1>
      <ul className="m-4 flex flex-col items-start justify-start p-4 text-sm ">
        <li>{storage}</li>
        <li>{users}</li>
        <li>{upside}</li>
        <li>{displayPrice}</li>
      </ul>

      <Button active={active}>Learn more</Button>
    </section>
  );
}

export default Card;
