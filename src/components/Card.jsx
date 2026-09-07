import Button from "./Button";

function Card({ id, title, price, storage, users, upside }) {
  return (
    <section className="card m-4 flex flex-col items-center justify-center rounded-lg border bg-white p-2 shadow-md">
      <p className="text-lg font-semibold">{title}</p>
      <h1 className="text-4xl font-bold">{price}</h1>
      <ul className="m-4 flex flex-col items-start justify-start p-4">
        <li>{storage}</li>
        <li>{users}</li>
        <li>{upside}</li>
      </ul>

      <Button>Learn more</Button>
    </section>
  );
}

export default Card;
