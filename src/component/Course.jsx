import React from "react";
import BreadCrumb from "./BreadCourse";

const Course = () => {
  return (
    <div className="min-vh-100">
      <BreadCrumb />
      <h1 className="text-center py-5">Courses Offered</h1>
      <div className="row px-5 pb-5">
        <div className="col px-3">
          <div className="card">
            <img
              src="/assets/c-programming.png"
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">C Programming</h5>
              <p className="card-text">Learn C programming from basics</p>
              <a href="#" className="btn btn-primary">
                Enroll
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/assets/c++.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">C++ Programming</h5>
              <p className="card-text">
                Explore the power of C++ programming language
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/assets/java.jpeg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">Java Programming</h5>
              <p className="card-text">
                Master Java programming for building applications
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row pb-5 px-5">
        <div className="col px-3">
          <div className="card">
            <img src="/assets/python.jpg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">Python Programming</h5>
              <p className="card-text">
                Dive into the world of Python programming
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/assets/react.jpeg" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">React</h5>
              <p className="card-text">
                Learn React for building interactive web applications
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col px-3">
          <div className="card">
            <img src="/assets/js.png" className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">JavaScript</h5>
              <p className="card-text">
                Discover the fundamentals of JavaScript
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        {/* <div className="card" aria-hidden="true">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a className="btn btn-primary disabled placeholder col-6"></a>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Course;
