import React, { useState, useEffect } from 'react';
import axios from 'axios';
function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/items',
      );
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <ul>
        
      {(!!data)?(data.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))):("Loading from server ...")}
    </ul>
  );
}
export default List;