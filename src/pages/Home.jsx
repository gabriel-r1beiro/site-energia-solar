import NavBar from "../components/NavBar/NavBar";
import { GoArrowRight } from "react-icons/go";
import { BsBox2 } from "react-icons/bs";
import { FaRegAddressCard, FaHeadphonesAlt  } from "react-icons/fa";

import "./style.css"
function Home() {
  return (
    <>
        <NavBar />

        <section className="since">
          <div className="explore">
            <h4>- SINCE 2004</h4>
            <h1 className="h1-since">
              Greening Our Future: 
              <span className="span-since"> Renewable Energy</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nisi ullam dicta eum cumque, provident aliquid odit voluptates suscipit obcaecati?</p>
            <div className="explore-button">
              <a className="explore-btt" href="#">Explore More <GoArrowRight /></a>
              <a className="explore-view" href="#">View All Services</a>
            </div>
          </div>
          <div className="image">
            <img className="since-img" src="..\img\pngwing.com.png" alt="" />
          </div>

        </section>

        <section className="itens">
          <div className="acos-display ecos">
            <a href=""><BsBox2 /></a>
            <div className="eco">
              <h2>Eco Friendly</h2>
              <p>Enviament Sustainte Products</p>
            </div>
          </div>

          <div className="acos-display ecos">
            <a href=""><FaRegAddressCard /></a>
            <div className="eco">
              <h2>Low Maintenance</h2>
              <p>Enviament Sustainte Products</p>
            </div>
          </div>

          <div className="acos-display ecos">
            <a href=""><FaHeadphonesAlt /></a>
            <div className="eco">
              <h2>Aftordable Price</h2>
              <p>Enviament Sustainte Products</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home