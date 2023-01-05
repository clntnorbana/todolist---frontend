import { useState } from "react";
import Create from "./components/Create";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <div
      className={`${
        theme ? "bg-slate-900 text-white" : "bg-white text-slate-700"
      } h-screen delay-100 ease-in h-full`}
    >
      <Header setTheme={setTheme} theme={theme} />
      <div className="mt-5 px-10 lg:px-40 py-5 flex flex-col-reverse md:flex-row justify-between gap-8">
        <Todos theme={theme} />
        <Create theme={theme} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
