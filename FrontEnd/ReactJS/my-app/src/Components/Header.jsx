// This is the Header Component for our application

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://logos-world.net/wp-content/uploads/2023/05/Food-Network-Logo-2003.png"
          alt="logo"
        />
        <h1>Khaana Khao</h1>
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
