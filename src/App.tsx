import React from "react";
import Header from "./components/Header";
import CompanyChart from "./components/Chart";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="px-5 py-16">
        <CompanyChart />
      </main>
    </div>
  );
}

export default App;
