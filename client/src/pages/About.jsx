import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import cakeImage1 from "../assets/images/cake1.jpg";
import cakeImage2 from "../assets/images/cake2.jpg";
import "../styles/about.css";
function About() {
  return (
    <>
      <Navbar />
      <section className="about-section">
        <h1>About Us</h1>
        <div className="about-content">
          <div className="text-content">
            <h3>Our Concept</h3>

            <p>
              Sweet Crumbs is an online bakery concept that brings the
              experience of handcrafted baked goods to your doorstep. Designed
              as a project to explore the intersection of technology and
              creativity, Sweet Crumbs is built with the vision of making
              delicious treats accessible to everyone through a seamless online
              experience.
            </p>
            <h3>The Inspiration</h3>
            <p>
              Sweet Crumbs was born out of a passion for both web development
              and the love of sweet treats. Although this is a fictional bakery,
              the goal was to create a virtual shop that captures the essence of
              a real-world bakery, complete with mouth-watering images and an
              easy-to-navigate online store.
            </p>
            <h3>Technology Behind the Project</h3>
            <p>
              Sweet Crumbs showcases the potential of web development by
              integrating modern tools and technologies. The project was built
              using:
            </p>
            <ul>
              <li>React for dynamic and responsive user experience</li>
              <li>CSS for a clean, elegant design</li>
              <li>
                Express for API integration to manage and deliver cake recipes
              </li>
            </ul>
          </div>

          <div className="cake-images">
            <img src={cakeImage1} alt="Cake 1" className="cake-image" />
            <img
              src={cakeImage2}
              alt="Cake 2"
              className="cake-image"
              id="overlap"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
