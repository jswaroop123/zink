// app/components/Footer.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
      <p>© {new Date().getFullYear()} Jyothi Swaroop N. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-4">
        <a
          href="https://github.com/jswaroop2003"  // replace with your GitHub
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/jyothiswaroop" // replace with your LinkedIn
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
