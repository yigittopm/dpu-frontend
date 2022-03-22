import React from "react";

function ContactMe() {
  return (
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Bana ulaşabilirsin!</strong>
            </p>
          </div>

          <div className="col-md-5 col-12">
            <div className="form-outline form-white mb-4">
              <input
                type="email"
                id="form5Example21"
                className="form-control"
              />
              <label className="form-label" htmlFor="form5Example21">
                Email: yigittopm@hotmail.com
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-light mb-4">
              Gönder
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactMe;
