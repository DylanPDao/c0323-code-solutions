/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function User({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    async function getData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return <p>Error! {error.message}</p>;
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
