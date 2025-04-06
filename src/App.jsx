/**
 * App Component
 * 
 * @file App.jsx
 * @author Xicheng Yin, <249508610>, <xyin@algomau.ca>
 */
import { useState } from 'react';
import { Typography, Table, Button, Flex, message } from 'antd';

const { Title } = Typography;

/**
 * App function component
 */
function App() {
  // Initialize the state with empty data
  const [data, setData] = useState();

  // Handle the search, fetch data from the api/example
  const handleSearch = () => {
    console.log('Fetching /api/example');
    fetch('/api/example')
      .then((response) => response.json())
      .then((data) => {
        if (!data.success) {
          message.error(data.errorMessage || 'Error fetching data');
          return;
        }
        setData(data);  // update state with received data
      })
      .catch((error) => {
        // handle error
        console.error('Error fetching mock data:', error);
        message.error('Error fetching data');
        setData(null);
      });
  };

  // Define the columns
  const columns = [
    {
      title: 'Student ID',
      dataIndex: 'studentId',
      key: 'studentId',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Message',
      dataIndex: 'message',
      key: 'message',
    },
  ];

  // render component
  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>Cooker Example App</Title>
      <Title level={2}>API Response Data</Title>
      {data ? <div>{JSON.stringify(data, null, 2)}</div> : 'Null'}

      <Flex align="center" justify="space-between">
        <Title level={2}>Student Info</Title>
        <Button type="primary" onClick={handleSearch}>
          Search
        </Button>
      </Flex>
      <Table rowKey="studentId" dataSource={data?.data} columns={columns} />
    </div>
  );
}

export default App;
