import { useGameState } from "../hooks/zustand/useGameState";

function Footer() {
  const { isTyping } = useGameState();
  return (
    <>
      <footer className={`footer ${isTyping ? "hide" : ""}`}>
        <div className="left-content">
          <div className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
        <div className="right-content">
          <a
            href="https://cooltypinggame.com"
            tabIndex={isTyping ? -1 : 1}
          >
            Chinna N J
          </a>
          <a
            href="https://github.com/chinnanj666"
            target="_blank"
            rel="noopener noreferrer"
            className="github"
            tabIndex={isTyping ? -1 : 1}
          >
            <img src="github.svg" alt="GitHub" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
