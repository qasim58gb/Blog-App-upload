import React from "react";
import BlogCard from "./BlogCard";

const index = ({ id, title, category, summary, image, date, access }) => {
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Coffee sugar, chicory seasonal espresso barista americano",
  //     image:
  //       "https://cdn.prod.website-files.com/5e4b1a54e48aed65701ff226/5e4b1a54e48aeda1521ff24c_3f4eb74a.jpg",
  //     date: "June 25, 2020",
  //     category: "MUSIC",
  //     summary:
  //       "Arista, percolator, cream, aromatic, fair trade, breve body instant lungo blue mountain cappuccino. Americano aroma mug espresso latte crema milk redeye acerbic. Galão robusta instant, decaffeinated, so fair trade wings.",
  //   },
  //   {
  //     id: 2,
  //     title: "Aromatic latte robusta wings instant barista cappuccino",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKTezalux1__3KwbJ1Bt-WnQQkW82G1Nwy6g&s",
  //     date: "July 10, 2020",
  //     category: "FOOD",
  //     summary:
  //       "Crema, barista, espresso lungo aroma blue mountain fair trade robusta. Instant redeye acerbic percolator.",
  //   },
  //   {
  //     id: 3,
  //     title: "Breve barista cappuccino instant redeye percolator latte",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&s",
  //     date: "August 2, 2020",
  //     category: "LIFESTYLE",
  //     summary:
  //       "Acerbic, crema, americano aroma mug milk wings, fair trade breve body instant lungo blue mountain cappuccino.",
  //   },
  //   {
  //     id: 4,
  //     title: "Espresso barista fair trade chicory sugar americano",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s",
  //     date: "September 15, 2020",
  //     category: "TRAVEL",
  //     summary:
  //       "Arista, lungo cappuccino milk instant crema aromatic fair trade blue mountain wings redeye.",
  //   },
  //   {
  //     id: 5,
  //     title: "Galão wings aroma latte decaffeinated barista chicory",
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR697CvPwSTKHDFGfI00eyapgXJhrIX25_KJw&s",
  //     date: "October 5, 2020",
  //     category: "MUSIC",
  //     summary:
  //       "Instant barista blue mountain crema aromatic lungo cappuccino, fair trade galão redeye decaffeinated robusta.",
  //   },
  //   {
  //     id: 6,
  //     title: "Latte robusta decaffeinated wings blue mountain chicory",
  //     image: "https://cdn.example.com/coffee6.jpg",
  //     date: "November 20, 2020",
  //     category: "FOOD",
  //     summary:
  //       "Aroma fair trade espresso instant lungo wings redeye galão blue mountain decaffeinated barista latte.",
  //   },
  //   {
  //     id: 7,
  //     title: "Espresso barista lungo wings redeye acerbic aroma",
  //     image: "https://cdn.example.com/coffee7.jpg",
  //     date: "December 30, 2020",
  //     category: "LIFESTYLE",
  //     summary:
  //       "Barista chicory instant cappuccino milk crema wings, lungo fair trade redeye aroma galão decaffeinated.",
  //   },
  //   {
  //     id: 8,
  //     title: "Chicory lungo milk aromatic barista fair trade wings",
  //     image: "https://cdn.example.com/coffee8.jpg",
  //     date: "January 15, 2021",
  //     category: "TRAVEL",
  //     summary:
  //       "Blue mountain crema barista wings decaffeinated, instant lungo espresso aroma fair trade redeye.",
  //   },
  //   {
  //     id: 9,
  //     title: "Fair trade wings crema barista aromatic blue mountain",
  //     image: "https://cdn.example.com/coffee9.jpg",
  //     date: "February 25, 2021",
  //     category: "FOOD",
  //     summary:
  //       "Espresso instant lungo redeye aroma galão decaffeinated blue mountain wings chicory cappuccino crema.",
  //   },
  //   {
  //     id: 10,
  //     title: "Lungo barista instant wings crema redeye fair trade",
  //     image: "https://cdn.example.com/coffee10.jpg",
  //     date: "March 10, 2021",
  //     category: "MUSIC",
  //     summary:
  //       "Galão chicory decaffeinated wings crema barista lungo cappuccino fair trade aromatic blue mountain redeye.",
  //   },
  // ];
  const dateStr = date;
  const date1 = new Date(dateStr);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = date1.toLocaleDateString("en-US", options);
  // console.log(formattedDate);

  return (
    <div>
      {/* {posts.map((post) => ( */}
      <div className="my-4">
        <BlogCard
          id={id}
          title={title}
          date={formattedDate}
          category={category}
          summary={summary}
          image={image}
          access={access}
        />
      </div>
      {/* ))} */}
    </div>
  );
};

export default index;
