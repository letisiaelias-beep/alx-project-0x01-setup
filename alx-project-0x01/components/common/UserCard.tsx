import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  company,
  address
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      {website && (
        <p className="text-blue-600 hover:underline">
          <a href={`http://${website}`} target="_blank" rel="noreferrer">
            {website}
          </a>
        </p>
      )}
      {company?.name && <p className="text-gray-500 mt-2">Company: {company.name}</p>}
      {address?.street && address?.city && (
        <p className="text-gray-500 text-sm">
          Address: {address.street}, {address.city}
        </p>
      )}
    </div>
  );
};

export default UserCard;
