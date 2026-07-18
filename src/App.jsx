import "./App.css";
import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import Footer from "./components/Footer.jsx";
import redDressImage from "./assets/women_Red_Dress.jpg";
import threePeopleImage from "./assets/Three_People.jpg";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Article
          date="11/12/20"
          dateTime="2020-11-12"
          title="On the Street in Brooklyn"
          image={redDressImage}
          imageAlt="Woman wearing a flowing red dress on a city sidewalk"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptate, quibusdam, quia, quod voluptates voluptatibus quos exercitationem quae voluptatem quas doloribus. Quisquam voluptate, quibusdam quia quod voluptates voluptatibus quos exercitationem."
        />

        <Article
          date="11/11/20"
          dateTime="2020-11-11"
          title="Vintage in Vogue"
          image={threePeopleImage}
          imageAlt="Three people wearing colorful vintage-style clothing"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem repellendus reprehenderit accusantium, voluptate animi deserunt officiis natus modi pariatur. Voluptatum, laboriosam! Dolorum exercitationem voluptatem vero doloribus, maxime quam necessitatibus."
        />

      </main>

      <Footer />
    </>
  );
}