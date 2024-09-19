import custom_cake from "../assets/images/custom_cake.jpg";
import "../styles/customize.css"

function CustomizeOrder() {
  return (
    <div className="container-fluid" id="customised-background">
      <div className="row">
        <div className="col-md-5 custom-image">
          <img
            className="img-fluid custom-cake-image"
            alt="about"
            title="about"
            src={custom_cake}
          />
        </div>
        <div className="col-md-7 d-flex align-items-center">
          <div className="form-submit">
            <h2 className="header-form mb-4">
              ..Seeking for something special and customized?
            </h2>

            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputYourName4">
                    Your Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputYourName4"
                    required
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    className="form-control"
                    id="inputPassword4"
                    required
                    maxLength="10"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Message <span className="text-danger">*</span>
                </label>
                <textarea
                  maxLength="250"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-danger btn-block">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizeOrder;
