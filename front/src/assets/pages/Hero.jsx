import NavBar from "../components/Nav";

function Hero() {
  return (
    <container>
      <NavBar />
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <a href="#get-started" className="btn-primary">Get Started</a>
      </div>

    </container>
    
  );

}

export default Hero