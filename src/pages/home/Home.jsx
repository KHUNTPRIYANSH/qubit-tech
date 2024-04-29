import React from "react";
import Nav from "../../components/Nav";
import "../../styles/Home.css";
import Projects from "../Projects";
import LanguageIcon from "@mui/icons-material/Language";
import DrawIcon from "@mui/icons-material/Draw";
import AndroidIcon from "@mui/icons-material/Android";
import AddchartIcon from "@mui/icons-material/Addchart";

import "../../styles/Prlx.scss";
import Tilt from "react-parallax-tilt";
import SecurityIcon from "@mui/icons-material/Security";
import Gal from "../../components/Gal";
import Team from "./Team";
import Footer from "../../components/Footer";
import "../../styles/Mq.css";
// import { Add } from "@mui/icons-material";
const Home = () => {
  return (
    <div>
      <Nav />
      <main>
        <section id="home" className="hero">
          <div className="hero-info">
            <h3>
              QUBIT <span className="text">Technologies</span>
            </h3>
            <h1>transforming ideas into reality</h1>
            <h6>
              Where Innovation Meets Expertise. We craft cutting-edge software
              solutions that drive real-world impact. From intuitive
              applications to top-notch IT consulting, we navigate the digital
              landscape with confidence.{" "}
            </h6>
            <a href="#about" className="btn">
              Learn More
            </a>
          </div>
          <img src="./imgs/h9-shape5.png" id="spin" loading="lazy" alt="" />
          <img src="./imgs/ziz.png" id="ziz" loading="lazy" alt="" />
          <img src="./imgs/h7-shape1.png" id="bounce" loading="lazy" alt="" />
          <div id="hm-img">
            <img src="./imgs/h9-banner1.png" loading="lazy" alt="" />
          </div>
        </section>
        <section id="about" className="about">
          <div className="ab-left">
            <img src="./imgs/h7-banner2.png" loading="lazy" alt="" />
            <img src="./imgs/ziz.png" id="ziz" loading="lazy" alt="" />

            <img src="./imgs/h9-shape5.png" id="spin" loading="lazy" alt="" />
          </div>
          <div className="ab-right">
            <div className="ab-data">
              <div className="semi blue">ABOUT US</div>
              <div className="t-title">
                We Are Innovative IT Solutions & Services Company
              </div>
              <div className="text">
                A passionate team of tech enthusiasts, designers, and problem
                solvers. We turn ideas into reality with bespoke solutions,
                reflecting excellence and innovation. Join us on our journey to
                shape the future through technology.
              </div>
              <div className="text">
                <ul>
                  <li>
                    Revolutionizing industries through innovation and
                    technology, leading the way in software development.
                  </li>
                  <li>
                    Providing cutting-edge solutions and user-centric design for
                    businesses and individuals.
                  </li>
                  <li>
                    A passionate team of tech enthusiasts, designers, and
                    problem solvers.
                  </li>
                  <li>
                    Fostering a culture of excellence and positive social change
                    through technology.
                  </li>
                </ul>
              </div>
              <div className="text">
                Revolutionizing industries through innovation and technology. We
                lead the way in software development, creating a seamlessly
                connected world for businesses and individuals.
              </div>
              <a className="btn" href="#ffftr">
                Contact Us
              </a>
            </div>
          </div>
          <img src="./imgs/h7-shape6.png" id="bounce" loading="lazy" alt="" />
        </section>
        <section id="service" className="service">
          <div className="s-grid">
            <div className="s-t">
              <h2 className="blue strong">Our Services</h2>
              <div className="btn" id="#project">
                Explore Projects
              </div>
            </div>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <LanguageIcon />
                  </div>
                  <div className="str">Web Development</div>
                </div>
                <div className="s-data">
                  Web development creates websites, from simple pages to
                  intricate applications, encompassing design, security, and
                  e-commerce.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <DrawIcon />
                  </div>
                  <div className="str">UI/UX Design</div>
                </div>
                <div className="s-data">
                  UI/UX design combines interface and experience for an
                  intuitive, user-friendly journey.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <AndroidIcon />
                  </div>
                  <div className="str">App Development</div>
                </div>
                <div className="s-data">
                  App development creates software applications for various
                  platforms, like mobile, web, and desktop.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <AddchartIcon />
                  </div>
                  <div className="str">Advertising</div>
                </div>
                <div className="s-data">
                  Advertising promotes products or services, aiming to draw
                  attention and potential investment through controlled messages
                  via mass media.
                </div>
              </div>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareColor="#ebe7ee3f"
              glarePosition="all"
              tiltMaxAngleX="24"
              tiltMaxAngleY="15"
              className="parallax-effect-glare-scale bggg "
            >
              <div className="s-cd">
                <div className="s-top">
                  <div className="stl">
                    <SecurityIcon />
                  </div>
                  <div className="str">IT Security</div>
                </div>
                <div className="s-data">
                  Strengthen your posture with powerful and affordable solutions
                  designed to manage today's security.
                </div>
              </div>
            </Tilt>
          </div>
        </section>
        {/* <section className="team">
          <Team />
        </section> */}

        <Projects />
        <section id="tec" className="tec">
          <div className="tt">Technologies We Use</div>
          <div className="gd">
            <div className="tec-f">
              <img className="dk" src="./imgs/t1.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t1.png" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t2.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t2.png" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t3.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t3.png" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t3.svg" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t3.svg" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t8.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t8.png" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t5.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t5.png" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t6.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t6.png" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t7.svg" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t7.svg" loading="lazy" alt="" />
            </div>
            <div className="tec-f">
              <img className="dk" src="./imgs/t9.png" loading="lazy" alt="" />
              <img className="lt" src="./imgs/t9.png" loading="lazy" alt="" />
            </div>
          </div>
        </section>
        <div id="contact">
          <section id="ffftr">
            <Gal />
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
