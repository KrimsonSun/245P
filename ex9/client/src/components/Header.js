import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <a href="#default" className="logo">
          ✨ Starlight Studio
        </a>
        <div className="headerRight">
          <a className="active" href="#home">HOME</a>
        <a href="https://github.com/KrimsonSun?tab=repositories">GitRepository</a>
        
        </div>
      </div>
    </>
  );
}

export default Header;