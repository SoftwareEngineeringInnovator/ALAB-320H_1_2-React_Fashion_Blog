import "./App.css";
import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import Footer from "./components/Footer.jsx";
import redDressImage from "./assets/women_Red_Dress.jpg";

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
      </main>

      <Footer />
    </>
  );
}