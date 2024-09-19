import fresh from "../assets/images/icons/leaf.svg";
import cake from "../assets/images/icons/cake.svg";
import clock from "../assets/images/icons/clock.svg";
import cart from "../assets/images/icons/cart-shopping.svg";
import discount from "../assets/images/icons/tag.svg";
import credit_card from "../assets/images/icons/credit-card.svg";

function Feature() {
  return (
    <div className="container-fluid px-5 py-5" id="feature">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
        <div className="col d-flex align-items-start">
          <img src={fresh} alt="leaf icon" className="feature-icon" />
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">100% Fresh</h3>
            <p>
              We use only the freshest ingredients to bake every cake with love
              and care, ensuring the highest quality and delicious taste in
              every bite.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <img src={cake} alt="cake icon" className="feature-icon"/>
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Custom Cake</h3>
            <p>
              From birthdays to weddings, our custom cakes are designed to match
              your vision, delivering not just a treat but a personalized
              experience.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <img src={clock} alt="clock icon" className="feature-icon" />
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Timely Delivery</h3>
            <p>
              Craving something sweet? Enjoy fast and reliable delivery, so your
              favorite cakes arrive fresh at your doorstep, right on time.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <img src={cart} alt="Shopping cart icon" className="feature-icon" />
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Easy Online Shopping</h3>
            <p>
              Browse and shop our cakes with ease using our online store. Just a
              few clicks, and your cake will be on its way!
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <img src={discount} alt="discount tag icon" className="feature-icon" />
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Exclusive Discounts</h3>
            <p>
              Indulge in your favorite treats without breaking the bank! Keep an
              eye out for our exclusive discounts and special offers.
            </p>
          </div>
        </div>
        <div className="col d-flex align-items-start">
          <img
            src={credit_card}
            alt="credit card icon"
            className="feature-icon"
          />
          <div>
            <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Multiple Payment Options</h3>
            <p>
              We make checkout simple and secure, offering multiple payment
              options, including credit card, so you can pay your way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
