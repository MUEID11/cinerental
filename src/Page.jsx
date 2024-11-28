

import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { ThemeContext } from "./context";

const Page = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ''}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
