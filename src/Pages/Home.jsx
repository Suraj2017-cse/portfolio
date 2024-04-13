import React, { useState } from "react";
import Header from "../Component/Header";
import MainItem from "../Component/MainItem";

const Home = () => {
  const [activeTab, setActiveTab] = useState('About');

  // Function For Changing the tab according to User Selection default Selection is About Tab 
  const handleSelectionChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='d-md-flex'>
      <Header onSelectionChange={handleSelectionChange} />
      <MainItem activeTab={activeTab} />
    </div>
  );
};

export default Home;
