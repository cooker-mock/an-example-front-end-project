import { useState } from 'react';
import { Typography, Table, Button, Flex, message } from 'antd';

const { Title } = Typography;

// data = {
//   "success": true,
//   "data": [
//     {
//       "name": "Alice Johnson",
//       "age": 20,
//       "studentId": "S001",
//       "message": "Welcome to the university!"
//     },
//     {
//       "name": "Bob Smith",
//       "age": 22,
//       "studentId": "S002",
//       "message": "Looking forward to the semester!"
//     }
//   ]
// }

function App() {
  const [data, setData] = useState();

  const handleSearch = () => {
    console.log('Fetching /api/example');
    fetch('/api/example')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching mock data:', error);
        message.error('Error fetching data');
        setData(null);
      });
  };

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
