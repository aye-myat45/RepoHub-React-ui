import { useEffect } from "react";
import Home_Img_1 from "../../assets/img/Home-Img-1.png";
import Home_Img_2 from "../../assets/img/Home-Img-2.png";
import Services_Img_1 from "../../assets/img/Services-Img-1.png";
import SS_Img from "../../assets/img/SS-Img.png";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import ScrollReveal from 'scrollreveal';


const Home = (props) => {

    const Works = [
      {id:1, src: Home_Img_2, subtitle: "Sportbooks", desc: "Rewind"},
      {id:2, src: Home_Img_2, subtitle: "Sportbooks", desc: "Rewind"},
      {id:3, src: Home_Img_2, subtitle: "Sportbooks", desc: "Rewind"},
      {id:4, src: Home_Img_2, subtitle: "Sportbooks", desc: "Rewind"},
      {id:5, src: Home_Img_2, subtitle: "Sportbooks", desc: "Rewind"},
      {id:6, src: Home_Img_2, subtitle: "Sportbooks", desc: "Rewind"},
    ]

    const Services = [
      {id:1, src: Services_Img_1, title: "Research Analysis"},
      {id:2, src: Services_Img_1, title: "Research Analysis"},
      {id:3, src: Services_Img_1, title: "Research Analysis"},
      {id:4, src: Services_Img_1, title: "Research Analysis"},
    ]

    useEffect( () => {
      ScrollReveal().reveal('.headline', {
        origin: 'bottom',
        distance: '43px',
        duration: 1200,
        interval: 200,
        scale: 0.9,
        viewFactor: 0.1,
        })
    })

    return (
      <div>

        <Helmet>
        {/* <!-- Primary Meta Tags --> */}
          <title>RepoHub App</title>
          <meta name="title" content="RepoHub App" />
          <meta name="description" content="React projects for test" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="repohub.co" />
          <meta property="og:title" content="RepoHub App" />
          <meta property="og:description" content="React projects for test" />
          <meta property="og:image" content={SS_Img} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="repohub.co" />
          <meta property="twitter:title" content="RepoHub App" />
          <meta property="twitter:description" content="React projects for test" />
          <meta property="twitter:image" content={SS_Img} />
          {/* <!-- Meta Tags Generated with https://metatags.io --> */}
        </Helmet>

        {/* Home Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
          <section className="container">
            <div className="row">
              <div className="col-12">
                <div className="my-5 py-5">
                  <h3 className="fw-light headline">Digial Agency</h3>
                  <h3 className="mb-5 headline">We developer complex interface systems for Web, Mobile & Art</h3>
                  <img src={Home_Img_1} className="img-fluid headline" alt="Home Img"/>
                </div>
              </div>
            </div>
          </section>
          </div>
        </div>
      </div>

        {/* Work Section */}
        <div className="bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <section className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="mt-5 py-5">
                        <h3 className="text-center mb-5 headline">Our Work Select Projects</h3>
                        <div className="row row-cols-1 row-cols-md-2 g-5">
                          {Works.map( (work) => {
                              return (
                                <div key={work.id} className="col">
                                  <div className ="card headline">
                                    <img src={work.src} className="img-fluid" alt="Home Img"/>
                                    <div className ="card-body">
                                      <h5 className ="card-title headline">{work.subtitle}</h5>
                                      <p className ="card-text headline">{work.desc}</p>
                                    </div>
                                  </div>
                                </div> 
                              )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="col-12 headline">
                      <div className="float-end mb-5">
                        <div className="d-flex justify-content-center align-content-center">
                          <span className="me-3">Explore More</span>
                          <div>
                            <i className="fa-solid fa-angle-right fa-1x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <section className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <h4 className="headline">Our Services</h4>
                    </div>
                    <div className="col-lg-6 headline">
                      <p className="headline">
                      From web sites to phone apps, everything on the screen can be broken down into components. 
                      </p>
                    </div>
                  </div>
                  <div className="row mt-5 g-4">
                    {Services.map(service => {
                      return (
                        <div key={service.id} className="col">
                          <div className ="card text-center headline">
                            <div className="mb-2">
                              <img src={service.src} className="img-fluid" alt="Services Img"/>
                            </div>
                            <div className ="card-body headline">
                              <h6 className ="card-title">{service.title}</h6>
                            </div>
                          </div>
                        </div>
                      )
                    })}  
                    <div className="col-12 headline">
                      <div className="float-end my-5">
                        <div className="d-flex justify-content-center align-content-center">
                          <span className="me-3">Explore More</span>
                          <div>
                            <i className="fa-solid fa-angle-right fa-1x"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <section className="container">
                  <div className="row">
                    <div className="col">
                      <div className="my-lg-5 py-lg-5">
                        <div className="text-center py-5 my-5">
                          <p className="headline">next</p>
                          <h4 className="headline">Our Story</h4>
                          <i className="fa-solid fa-arrow-right-long headline"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-top py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <section className="container">
                  <div className="row">
                    <div className="col col-md-10 col-lg-auto headline">
                      <div className="small mb-4 mb-lg-4">
                        <NavLink to="/" className="text-decoration-none text-secondary me-4">Works</NavLink>
                        <NavLink to="/" className="text-decoration-none text-secondary me-4">Services</NavLink>
                        <NavLink to="/" className="text-decoration-none text-secondary me-4">Story</NavLink>
                        <NavLink to="/" className="text-decoration-none text-secondary d-lg-none">Careers</NavLink>
                        <NavLink to="/" className="text-decoration-none text-secondary d-lg-none ms-3">Contact Us</NavLink>
                      </div>
                    </div>
                    <div className="col headline">
                      <div className="text-center">
                        <h5 className="fw-bold">RepoHub</h5>
                      </div>
                    </div>
                    <div className="col d-none d-lg-block headline">
                      <div className="text-end small">
                        <NavLink to="/" className="text-decoration-none text-secondary">Careers</NavLink>
                        <NavLink to="/" className="text-decoration-none text-secondary ms-5">Contact Us</NavLink>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home;