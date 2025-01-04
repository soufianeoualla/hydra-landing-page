import Header from "@components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <main className=" bg-primary p-8">
      <div className="max-w-screen-xl mx-auto">
        <Header />
        <Hero />
      </div>
    </main>
  );
}

export default App;
