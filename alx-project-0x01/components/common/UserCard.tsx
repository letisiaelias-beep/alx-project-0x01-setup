import React from "react";
import { UserProps } from "@/interfaces";

// ✅ Use <UserProps> directly
const UserCard: React.FC<UserProps> = (user) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-800">{user.email}</p>

      <div className="mt-3 text-sm">
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
        <p><span className="font-semibold">Website:</span> {user.website}</p>
        <p><span className="font-semibold">Company:</span> {user.company.name}</p>
        <p><span className="font-semibold">Address:</span> {user.address.street}, {user.address.city}</p>
      </div>
    </div>
  );
};

export default UserCard;