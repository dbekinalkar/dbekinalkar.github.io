const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center p-4 bg-neutral text-neutral-content">
      <div className="flex items-center">
        Made by Daniyal Bekinalkar
        <span className="border border-primary mx-2 h-4"></span>
        <a
          href="https://www.github.com/dbekinalkar"
          target="_blank"
          className="link link-hover inline"
        >
          https://github.com/dbekinalkar
        </a>
      </div>
    </footer>
  );
};

export default Footer;
