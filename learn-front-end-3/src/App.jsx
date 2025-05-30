import { Fragment } from 'react';

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

// User list component with JSX features
function UserListComponent() {
  // JavaScript array of users
  const users = [
    { id: 1, name: 'Nathan', role: 'Web Developer' },
    { id: 2, name: 'John', role: 'Web Designer' },
    { id: 3, name: 'Jane', role: 'Team Leader' },
    { id: 4, name: 'Sarah', role: 'UX Designer' },
    { id: 5, name: 'Mike', role: 'Backend Developer' }
  ];

  // JavaScript expression to get total users
  const totalUsers = users.length;
  
  // JavaScript expression to get current time
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className={styles.container}>
      {/* Using JavaScript expressions in JSX */}
      <h1 className={styles.header}>
        Active Users ({totalUsers})
      </h1>
      
      {/* Using JavaScript expressions for dynamic content */}
      <p className="text-gray-600 mb-4">
        Last updated: {currentTime}
      </p>

      {/* Using map() to render a list */}
      <ul className={styles.list}>
        {users.map(function(user) {
          return (
            <li 
              key={user.id} 
              className={styles.listItem}
            >
              <span className={styles.name}>{user.name}</span>
              <span className={styles.role}> as the {user.role}</span>
            </li>
          );
        })}
      </ul>

      {/* Example of conditional rendering using JavaScript expression */}
      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p>
          {totalUsers > 3 
            ? 'We have a large team!' 
            : 'We are a small team'}
        </p>
      </div>
    </div>
  );
}

// Main App component
function App() {
  // JSX can be assigned to variables
  const header = <h1 className="text-3xl font-bold text-center my-4">Team Dashboard</h1>;
  
  // JavaScript expression in className
  const isDarkMode = false;
  const containerClass = `app-container ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`;

  return (
    <div className={containerClass}>
      {header}
      <UserListComponent />
    </div>
  );
}

export default App;