// This is the Header Component for our application

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://cdn.pixabay.com/photo/2017/02/17/17/33/food-2074638_1280.png"
          alt="logo"
        />
        <h1>Desi Khao</h1>
      </div>

      <div className="navigation-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="cart-area">
            Cart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
