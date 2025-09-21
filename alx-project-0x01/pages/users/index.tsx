import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
// Define UserData interface here since it's not exported from "@/interfaces"
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: any;
  phone?: string;
  website?: string;
  company?: any;
}
// If UserProps is not exported, define it here based on usage:
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: any;
  phone?: string;
  website?: string;
  company?: any;
}
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">User Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
            <UserCard
              id={id}
              name={name}
              username={username}
              email={email}
              address={address}
              phone={phone ?? ""}
              website={website ?? ""}
              company={company}
              key={key}
            />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
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
