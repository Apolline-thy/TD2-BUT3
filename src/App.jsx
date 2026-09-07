import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <section>
      <h1>Our pricing</h1>
    <Card title="Basic"  price="$19.99" feature1="500 BG Storage" feature2="2 Users Allowed" feature3="Send up to 3 GB" />
    </section>
  );
}

export default App;