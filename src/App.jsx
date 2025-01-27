import React, { useEffect, useState } from 'react';

function App() {
  const [mockData, setMockData] = useState();

  useEffect(() => {
    console.log('Fetching /api/getUserName');
    fetch('/api/getUserName')
      .then((response) => response.json())
      .then((data) => {
        setMockData(data);
      })
      .catch((error) => console.error('Error fetching mock data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cooker Example App</h1>
      <h2>API Response</h2>
      {mockData ? <div>{JSON.stringify(mockData, null, 2)}</div> : 'Loading...'}
    </div>
  );
}

export default App;
