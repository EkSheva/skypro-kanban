import PopUser from "../PopUser/PopUser";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="../images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="../images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              {/* <!-- <a href="">x</a> --> */}
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </nav>
          <PopUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
