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
          text="Cray ipsum, dolor sit amet consectetur adipisicing elit. 
          Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, 
          laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, 
          ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, 
          iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit 
          consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae."
        />

        <Article
          date="11/11/20"
          dateTime="2020-11-11"
          title="Vintage in Vogue"
          image={threePeopleImage}
          imageAlt="Three people wearing colorful vintage-style clothing"
          text="Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam 
          aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. 
          Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. 
          Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. 
          Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas."
        />

      </main>

      <Footer />
    </>
  );
}