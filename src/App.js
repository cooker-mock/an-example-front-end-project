import React, { useEffect, useState } from 'react';

function App() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch('/api/getUserName')
      .then((response) => response.json())
      .then((data) => setMockData(data.endpoints || []))
      .catch((error) => console.error('Error fetching mock data:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cooker Example App</h1>
      <h2>Mock Endpoints</h2>
      <ul>
        {mockData.map((endpoint, index) => (
          <li key={index}>
            <strong>{endpoint.method}</strong> {endpoint.url}
            <pre>{JSON.stringify(endpoint.response, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
