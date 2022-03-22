import React from "react";

function Links() {
  return (
    <section className="">
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">React</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="https://tr.reactjs.org/" className="text-white">
                React.org
              </a>
            </li>
            <li>
              <a href="https://redux-toolkit.js.org/" className="text-white">
                Redux Toolkit
              </a>
            </li>
            <li>
              <a
                href="https://v5.reactrouter.com/web/guides/quick-start"
                className="text-white"
              >
                Router Dom
              </a>
            </li>
            <li>
              <a
                href="https://react-bootstrap.github.io/"
                className="text-white"
              >
                React-Bootstrap
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Node.js</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="https://nodejs.org/" className="text-white">
                Node.js
              </a>
            </li>
            <li>
              <a href="https://jwt.io/" className="text-white">
                JWT
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/bcrypt"
                className="text-white"
              >
                Bcrypt
              </a>
            </li>
            <li>
              <a
                href="https://www.npmjs.com/package/dotenv"
                className="text-white"
              >
                Dotenv
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Express.js</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="https://expressjs.com/" className="text-white">
                Express
              </a>
            </li>
            <li>
              <a
                href="https://expressjs.com/en/4x/api.html"
                className="text-white"
              >
                Api
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase">Mongodb</h5>

          <ul className="list-unstyled mb-0">
            <li>
              <a href="https://www.mongodb.com/" className="text-white">
                Mongodb
              </a>
            </li>
            <li>
              <a href="https://mongoosejs.com/" className="text-white">
                Mongoose
              </a>
            </li>
            <li>
              <a
                href="https://www.mongodb.com/cloud/atlas/register"
                className="text-white"
              >
                Mongo Atlas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Links;
