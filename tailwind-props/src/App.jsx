import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-red-300 p-4 rounded-2xl mb-4">JohnDoe</h1>
      <Card username="Abhigyan Jha" btnText="See Profile"/>
      <Card username="John Doe" />
    </>
  );
}

export default App;
