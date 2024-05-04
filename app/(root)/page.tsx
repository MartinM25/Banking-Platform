import BalanceBox from "@/components/BalanceBox";
import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Thamusanqa", lastName: "Moyo", email: "contact@myemail.com"}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <BalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user={loggedIn} 
        transactions={[]} 
        banks={[{currentBalance: 123.59}, {currentBalance: 250.76}]} 
        
      />
    </section>
  );
};

export default Home;
