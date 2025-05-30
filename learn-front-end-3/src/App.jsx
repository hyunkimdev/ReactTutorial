import { Fragment } from 'react';

function App() {
  // Example 1: Using a div wrapper
  const ExampleWithDiv = () => (
    <div>
      <h1>Hello World!</h1>
      <h2>Learning to code with React</h2>
    </div>
  );

  // Example 2: Using empty Fragment tags
  const ExampleWithEmptyTags = () => (
    <>
      <h1>Hello World!</h1>
      <h2>Learning to code with React</h2>
    </>
  );

  // Example 3: Using explicit Fragment component
  const ExampleWithFragment = () => (
    <Fragment>
      <h1>Hello World!</h1>
      <h2>Learning to code with React</h2>
    </Fragment>
  );

  return (
    <div style={{ padding: '20px' }}>
      <h3>Example 1: Using div wrapper</h3>
      <ExampleWithDiv />
      
      <h3 style={{ marginTop: '20px' }}>Example 2: Using empty Fragment tags</h3>
      <ExampleWithEmptyTags />
      
      <h3 style={{ marginTop: '20px' }}>Example 3: Using explicit Fragment component</h3>
      <ExampleWithFragment />
    </div>
  );
}

export default App;