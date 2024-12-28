function Navbar() {
    const handleClick = () => {
     // Handle click event
    };
    
    return (
     <nav>
      <div className="nav__logo">
       <img src="/logo.png" alt="logo" className="logo" />
       <a href="/">
        StayHealthy
       </a>
       <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
       
      </div>
      <ul className="nav__links active">
       <li className="link">
        <a href="/">Home</a>
       </li>
       <li className="link">
        <a href="/">Appointments</a>
       </li>
       <li className="link">
        <a href="/">Health Blog</a>
       </li>
       <li className="link">
        <a href="/">Reviews</a>
       </li>
       <li className="link">
        <a href="../signup">
         <button className="btn1">Sign Up</button>
        </a>
       </li>
       <li className="link">
        <a href="../login">
         <button className="btn2">Login</button>
        </a>
       </li>
      </ul>
     </nav>
    );
    }
    
    export default Navbar;
    