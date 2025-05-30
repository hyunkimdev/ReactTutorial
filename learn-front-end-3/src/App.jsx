import { useState } from 'react';

// Styles as JavaScript variables
const styles = {
  container: 'container mx-auto p-4',
  header: 'text-2xl font-bold mb-4 text-blue-600',
  card: 'bg-white rounded-lg shadow-md p-4 mb-4',
  list: 'list-none space-y-2',
  listItem: 'bg-gray-50 p-3 rounded border border-gray-200',
  role: 'text-sm text-gray-600',
  name: 'font-semibold text-gray-800'
};

// Child component that receives props
function UserProfile({ user, onUpdateUser }) {
  // Props destructuring in the function parameters
  const { name, role, age, hobbies } = user;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">User Profile</h2>
      
      {/* Displaying props */}
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Role:</span> {role}</p>
        <p><span className="font-semibold">Age:</span> {age}</p>
        <p><span className="font-semibold">Hobbies:</span></p>
        <ul className="list-disc list-inside">
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>

      {/* Button to update user state through props */}
      <button 
        onClick={() => onUpdateUser({
          ...user,
          name: name === 'John' ? 'Jane' : 'John',
          role: role === 'Developer' ? 'Designer' : 'Developer'
        })}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Toggle User
      </button>
    </div>
  );
}

// Child component that manages its own state
function Counter({ initialCount = 0 }) {
  // Using useState hook
  const [count, setCount] = useState(initialCount);
  const [isEven, setIsEven] = useState(count % 2 === 0);

  // Function to update multiple states
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    setIsEven(newCount % 2 === 0);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-2">Counter Component</h2>
      <p className="text-lg">Count: {count}</p>
      <p className="text-sm text-gray-600">
        This number is {isEven ? 'even' : 'odd'}
      </p>
      <button 
        onClick={incrementCount}
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Increment
      </button>
    </div>
  );
}

// Main App component
function App() {
  // Using useState hook to manage user data
  const [user, setUser] = useState({
    name: 'John',
    role: 'Developer',
    age: 29,
    hobbies: ['coding', 'reading', 'gaming']
  });

  // Function to update user state
  const handleUpdateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Props and State Demo
      </h1>

      {/* Passing multiple props to UserProfile */}
      <UserProfile 
        user={user}
        onUpdateUser={handleUpdateUser}
      />

      {/* Passing a prop to Counter */}
      <Counter initialCount={0} />

      {/* Displaying current state in parent */}
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold">Parent Component State:</h3>
        <pre className="mt-2 text-sm">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;