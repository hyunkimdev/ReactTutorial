import { Fragment } from 'react';

// Header component for the application
function HeaderComponent() {
  return (
    <header style={{ 
      padding: '1rem', 
      backgroundColor: '#f0f0f0', 
      marginBottom: '1rem',
      borderRadius: '4px'
    }}>
      <h1>My Social Feed</h1>
    </header>
  );
}

// User profile component
function ProfileComponent() {
  return (
    <div style={{ 
      padding: '1rem', 
      backgroundColor: '#e8f4f8', 
      marginBottom: '1rem',
      borderRadius: '4px'
    }}>
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
      <p>Location: New York</p>
      <p>Bio: React Developer</p>
    </div>
  );
}

// Individual post component
function PostComponent({ title, content, author }) {
  return (
    <div style={{ 
      padding: '1rem', 
      backgroundColor: '#fff', 
      marginBottom: '1rem',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small>Posted by: {author}</small>
    </div>
  );
}

// Feed component that contains multiple posts
function FeedComponent() {
  const posts = [
    {
      title: "Learning React",
      content: "React is amazing for building user interfaces!",
      author: "John Doe"
    },
    {
      title: "Component Composition",
      content: "Breaking down UI into reusable components is powerful.",
      author: "Jane Smith"
    },
    {
      title: "React Fragments",
      content: "Using fragments helps keep the DOM clean.",
      author: "John Doe"
    }
  ];

  return (
    <div style={{ 
      padding: '1rem', 
      backgroundColor: '#f8f8f8', 
      borderRadius: '4px'
    }}>
      <h2>Recent Posts</h2>
      {posts.map((post, index) => (
        <PostComponent 
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
        />
      ))}
    </div>
  );
}

// Main App component that composes all other components
function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <HeaderComponent />
      <ProfileComponent />
      <FeedComponent />
    </div>
  );
}

export default App;