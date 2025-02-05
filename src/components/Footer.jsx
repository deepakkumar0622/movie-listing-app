import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-center bg-black/50 space-y-3 p-4">
        <div className="flex items-center justify-center gap-4">
          <Link to={"/"}>About</Link>
          <Link to={"/"}>Contact</Link>
        </div>
        <p className="text-sm">#Created By Deepak Kumar</p>
      </footer>
    </div>
  );
};

export default Footer;
