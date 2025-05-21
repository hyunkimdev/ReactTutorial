import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="container mt-3">
      {selectedCity && (
        <Alert>
          Selected city: {selectedCity}
          <Button onClick={() => setSelectedCity(null)}>Close</Button>
        </Alert>
      )}
      <ListGroup 
        items={items} 
        heading="Cities" 
        onSelectItem={(item) => setSelectedCity(item)} 
      />
    </div>
  );
}

export default App;