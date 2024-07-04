
function NavBar() {
  return (
    <header className="header-conteiner">
        <div className="conteiner-contact">
            <div className="contact">
                
            </div>
            <div className="logo-marca"></div>
            <div className="social-midia"></div>
        </div>
        <nav className="navbar">
            <div className="navbar-conteiner">
                <div className="search"></div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Serviços</a></li>
                    <li><a href="/">Projetos</a></li>
                    <li><a href="/">Blogs</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
                <div className="get">
                    <button>Obter uma cotação</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar