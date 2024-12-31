import React from 'react';
import { useUser } from './UserContext';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="p-4 max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name || 'Not Set'}</p>
        <p><strong>Email:</strong> {user.email || 'Not Set'}</p>
        <p><strong>Age:</strong> {user.age ? user.age : 'Not Set'}</p>
      </div>
    </div>
  );
};

export default Profile;
