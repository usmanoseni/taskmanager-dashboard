import { useState } from "react";
import Navbar from "./component/Navbar.jsx";
import Card from "./component/Card.jsx";
import Footer from "./component/Footer.jsx";
import TaskManager from "./component/TaskManager.jsx";
import PostsList from "./component/PostList.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="fixed top-0 left-0 w-full z-20"><Navbar /> </div>
      <main className="min-h-screen bg-slate-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 transition-colors duration-300 pt-20">
        <section className="flex justify-center items-center mb-20 px-6"><Card /></section>
        <section className="px-6 mb-20"> <TaskManager /></section>
        <PostsList />
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
