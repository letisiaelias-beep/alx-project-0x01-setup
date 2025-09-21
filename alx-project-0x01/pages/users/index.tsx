// pages/users/index.tsx
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";

interface UsersPageProps {
  posts: UserProps[]; // name kept as 'posts' because getStaticProps returns posts per assignment
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  // keep local list so added users appear immediately
  const [userList, setUserList] = useState<UserProps[]>(posts || []);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const newId = userList.length + 1;
    const created: UserProps = {
      id: newId,
      name: newUser.name,
      username: newUser.username,
      email: newUser.email,
      address: {
        street: newUser.address?.street ?? "",
        suite: newUser.address?.suite ?? "",
        city: newUser.address?.city ?? "",
        zipcode: newUser.address?.zipcode ?? "",
        geo: {
          lat: newUser.address?.geo?.lat ?? "",
          lng: newUser.address?.geo?.lng ?? "",
        },
      },
      phone: newUser.phone ?? "",
      website: newUser.website ?? "",
      company: {
        name: newUser.company?.name ?? "",
        catchPhrase: newUser.company?.catchPhrase ?? "",
        bs: newUser.company?.bs ?? "",
      },
    };

    setUserList((prev) => [created, ...prev]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userList.map((u) => (
            <UserCard key={u.id} {...u} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={(userData) => {
            handleAddUser(userData);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
