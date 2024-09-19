import Feature from "./Feature.jsx"
function Parallax() {
    return (
      <section>
        <div className="parallax" id="gifts">
          <h1>All For Your Sweet Tooth Cravings</h1>
        </div>
        <Feature />
        <div className="parallax" id="cute_cakes">
          <h1>Personalized delights made just for you.</h1>
        </div>
      </section>
    );

}

export default Parallax;