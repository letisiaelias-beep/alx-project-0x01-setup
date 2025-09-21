import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h3 className="font-bold text-2xl">
     <Link href="/">Daily Contents</Link>
  </h3>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="hover:underline">
              <Link href="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
Replace the content of pages/index.tsx with the following content

import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="mt-4 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
            </div>
      </main>
    </div>
  )
}

export default Home;
