import "./style.css";

import { IoSearchOutline } from "react-icons/io5";
import { MdElectricBolt,  MdChat } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp, IoLogoYoutube  } from "react-icons/io";
import { FaFacebook,FaTwitter  } from "react-icons/fa";
import { useState } from "react";


function NavBar() {
    const [search, setSearch] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
       setSearch(!search)
    }
  return (
    <header className="header-conteiner">
        <div className="conteiner-contact">
            <div className="contact">
                <a href="/">
                    <span><MdChat /></span>
                    exemple@gmail.com
                </a>
                <a href="/">
                    <span><BsTelephoneFill />                    </span>
                    (38) 9999-9999
                </a>
            </div>
            <div className="logo-marca">
                <a href="/">
                    <span className="eletric"><MdElectricBolt /></span>
                    So <span className="lar">lar.</span>
                </a>
            </div>
            <div className="social-midia">
                <li><a href="/"><FaFacebook /></a></li>
                <li><a href="/"><IoLogoWhatsapp /></a></li>
                <li><a href="/"><FaTwitter /></a></li>
                <li><a href="/"><IoLogoYoutube /></a></li>

            </div>
        </div>
        <nav className="navbar">
            <div className="navbar-conteiner">
                <div className="search">
                    <a href="/" onClick={handleSearch}>
                        {!search && 
                            <a href="" onClick={handleSearch} className="animacao">
                                <IoSearchOutline />
                            </a>
                        }
                        {search &&
                            <>
                                <input type="text" />
                                <a href="" onClick={handleSearch}>
                                    <IoSearchOutline />
                                </a>
                            </>
                        }
                    </a>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Serviços</a></li>
                    <li><a href="/">Projetos</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
                <div className="get">
                    <button>Obter uma Cotação</button>
                </div>
            </div>
        </nav>
    </header>
  )
};

export default NavBar;