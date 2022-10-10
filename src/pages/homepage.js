import React from "react";
import { useHistory } from "react-router-dom";

import img1 from '../Images/skill.jpg';
import img2 from '../Images/byjus.jpg';
import img3 from '../Images/geek.jpg';
import img4 from '../Images/Great_Learning_Logo.jpg';
import img5 from '../Images/111.png';
import img6 from '../Images/121.jpg';
const Dashboard = () => {
  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/login");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };

  return (
    <>
    <header id="header" class="fixed-top d-flex align-items-center header-transparent">
    <div class="container d-flex justify-content-between align-items-center">

      <div class="logo">
        <h1 class="text-light"><a href="index.html"><span>Resume-Maker</span></a></h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="active " href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
        <li>
        <button onClick={logoutHandler} className="button-85">
        Logout
      </button></li>
	  <hr/>
	
      </nav>

    </div>
  </header>

  <section id="hero" class="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Resume_world</span></h2>
          <p class="animate__animated animate__fadeInUp">Create your Profesional Resume here ,And Get Shortlisted easily</p>
          <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Skill-lync Team</h2>
          <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
          <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
          <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
  </section>
  <br></br>
  <center>
      <button class="button-85" role="button" onClick={()=>history.push("/studentdetails")}>Create Your Resume Here!!! Click Here !!!</button>
    </center>
  <main id="main">
    <section class="services">
      <div class="container">
       
      <br>
      </br>
      <br></br>
    <center> <h1>Our Premium Customers Review</h1></center> 
        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div>
                <img src={img1} alt="" width="200px" height="200px"/>
              </div>
              {/* <div class="icon"><i class="bx bxl-dribbble"></i></div> */}
              <h4 class="title"><a href="">Skill-Lync Team</a></h4>
              <p class="description">This Resume site help us to create a Professional resumes , We Suggest our student to Make their Resumes here.</p>
            </div>
          </div>
        
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
            <div>
                <img src={img2} alt="" width="200px" height="200px"/>
              </div>
              <h4 class="title"><a href="">Byjus-Team</a></h4>
              <p class="description">Our Rating 5 star </p>
            </div>
          </div>
          
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
            <div>
                <img src={img3} alt="" width="200px" height="200px"/>
              </div>
              <h4 class="title"><a href="">Geeksforgeek Team</a></h4>
              <p class="description">Wonderfull Idea and creativity</p></div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-blue">
            <div>
                <img src={img4} alt="" width="200px" height="200px"/>
              </div>
              <h4 class="title"><a href="">Great_Learning Team</a></h4>
              <p class="description">Helping Many Professionals</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 video-box">
            <a href="https://www.youtube.com/watch?v=w0GsNFDFtUo" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
            <img src={img1} alt="" width="200px" height="200px"/>
              <h4 class="title"><a href="">To Make Resume Efficiently</a></h4>
              <p class="description">Just Watch Our Employee Video And Make a Resume in Our Website</p>
            </div>

            <div class="icon-box">
              <h4 class="title"><a href="">Hr Selection AI</a></h4>
              <p class="description">Every resume nowdays not checked by Hr's , AI Check your resume here and trace every word, so our website helps to ace the AI Technology.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
    <section class="features">
      <div class="container">

        <div class="section-title">
          <h2>Features</h2>
          <p>Many Features!!! You can Provide every Details</p>    
          </div>

        <div class="row" data-aos="fade-up">
          <div class="col-md-5">
            <img src={img5} alt="" width="260px" height="250px"/>
          </div>
          <div class="col-md-7 pt-4">
            <h3>Personal Details</h3>
            <p class="fst-italic">
              In this Page you can give your Personal Details
            </p>
          </div>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-md-5 order-1 order-md-2">
          <div class="col-md-5">
            <img src={img6} alt="" width="360px" height="250px"/>
          </div>
          </div>
          <div class="col-md-7 pt-5 order-2 order-md-1">
            <h3>Eductational Details</h3>
            <p class="fst-italic">
             In This step you can give your Educational details 
            </p>
            <p>
              It will ask you college/school name , and scores and It will ask your Passed out year,
              You need to give everything clearly and helps to create a efficient Resume 
            </p>
          </div>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-md-5">
          <div class="col-md-5">
            <img src={img6} alt="" width="360px" height="250px"/>
          </div>
          </div>
          <div class="col-md-7 pt-5">
            <h3>Addition Information</h3>
            <p>You can give your Addition info like certification and skills you have.</p>
          </div>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-md-5 order-1 order-md-2">
          <div class="col-md-5">
            <img src={img6} alt="" width="360px" height="250px"/>
          </div>
          </div>
          <div class="col-md-7 pt-5 order-2 order-md-1">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>

  </main>
 


  
    </>
  );
};

export default Dashboard;
