import React from "react";
import Banner from "../../components/banner";
import logo from "../../public/logo.png";
import Search from "../../components/search";
import SwiperNews from "../../components/swiperNews";
import newsImage from "../../public/newsImage.png";
import Header from "../../components/header";
import Footer from "../../components/footer";

const newsData = [
  {
    id: 1,
    image: { newsImage },
    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    desc: "1h ago · by Troy Corlson",
  },
  {
    id: 2,
    image: { newsImage },

    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    desc: "1h ago · by Troy Corlson",
  },
  {
    id: 3,
    image: { newsImage },

    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    desc: "1h ago · by Troy Corlson",
  },
  {
    id: 4,
    image: { newsImage },

    title: "A Plan to Rebuild the Bus Terminal Everyone Loves to Hate",
    desc: "1h ago · by Troy Corlson",
  },
];

const LandingPage = () => {
  const jsonData = require("../../data/data.json");
  if (jsonData) {
  } else {
    localStorage.setItem("jsonData", JSON.stringify(jsonData));
    console.log("jsonData is empty.");
  }

  return (
    <div>
      <section className="App__nav">
        <Header />
      </section>
      <Banner text="Search App" image={logo} />

      <Search title="Find in records" />

      <SwiperNews title="Top News" data={newsData} />

      <section className="App__footer">
        <Footer />
      </section>
    </div>
  );
};

export default LandingPage;
