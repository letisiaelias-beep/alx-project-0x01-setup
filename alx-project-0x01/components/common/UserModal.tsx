// components/common/UserModal.tsx
import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user); // UserData is passed (id optional)
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
            placeholder="Full name"
          />

          <label className="block mb-2 text-sm font-medium">Username</label>
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            className="w-full mb-3 px-3 py-2 border rounded"
            placeholder="Username"
          />

          <label className="block mb-2 text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded"
            placeholder="Email"
          />

          {/* Simple footer buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
