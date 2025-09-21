import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit, user }) => {
  const [form, setForm] = useState<UserData>({
    name: user?.name || "",
    email: user?.email || "",
    username: user?.username || "",
    phone: user?.phone || "",
    website: user?.website || "",
    company: user?.company || { name: "" },
    address: user?.address || { street: "", city: "", suite: "", zipcode: "", geo: { lat: "", lng: "" } },
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "company") {
      setForm({ ...form, company: {
        name: value,
        catchPhrase: "",
        bs: ""
      } });
    } else if (name === "street" || name === "city") {
      setForm({ ...form, address: { ...form.address, [name]: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {user ? "User Details" : "Add User"}
        </h2>

        {user ? (
          <div className="space-y-2 text-gray-700">
            <p>
              <span className="font-semibold">Name:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Username:</span> {user.username}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="font-semibold">Website:</span> {user.website}
            </p>
            <p>
              <span className="font-semibold">Company:</span> {user.company.name}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {user.address.street}, {user.address.city}
            </p>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border rounded w-full p-2"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded w-full p-2"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="border rounded w-full p-2"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="border rounded w-full p-2"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              className="border rounded w-full p-2"
              value={form.website}
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="border rounded w-full p-2"
              value={form.company.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              className="border rounded w-full p-2"
              value={form.address.street}
              onChange={handleChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border rounded w-full p-2"
              value={form.address.city}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserModal;
