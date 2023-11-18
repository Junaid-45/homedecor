import React from "react";
import Header from "./components/Header";
import Category from "./components/Category";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#FFFFFF] h-full">
      <Header />
      <Category />
      <Summary />
      <Footer />
    </div>
  );
};

export default App;
