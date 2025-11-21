"use client";
import React, { useState, useEffect } from 'react';

export default function Open() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  

  console.log(data);
  return (
    <div>
      {loading && <div>Loading...</div>} {/* Display loading message */}
      {error && <div>Error: {error.message}</div>} {/* Display error message */}
      {data && data.map(user => <div key={user.id}>{user.name}</div>)}
      {/* Conditionally render content only if data is available */}
      {!data && !loading && !error && <div>No data available.</div>}
    </div>
  );
}