import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const socialLinks = [
  { href: "https://linkedin.com/in/mohammedalfakir", icon: <FaLinkedin /> },
  { href: "https://www.github.com/mohammedalfakir", icon: <FaGithub /> },
  { href: "https://x.com/itsAlfakir", icon: <FaTwitter /> },
  { href: "mailto:its.mohammedalfakir@gmail.com", icon: <IoIosMail /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          All design credits go to Zentry
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
