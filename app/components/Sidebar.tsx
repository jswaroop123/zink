// zink-portfolio/app/components/Sidebar.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-[#1f1f1f] text-center p-6 hidden md:block rounded-xl">
      <div className="flex flex-col items-center flex">
        <img
          src="/icons/avatar.jpg"
          alt="Avatar"
          className="w-24 h-24 rounded-full border-2 border-yellow-400 mb-4"
        />
        <h2 className="text-lg font-semibold text-white">Jyothi Swaroop N</h2>
        <p className="text-sm text-gray-400">Full Stack Developer</p>

        <div className="mt-6 space-y-2 text-left text-sm text-gray-300">
          <p><strong>Email:</strong> jswaroop2003...</p>
          <p><strong>Phone:</strong> +91 93800*****</p>
          <p><strong>Location:</strong> Karnataka, India</p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-full transition"
        >
          Download Resume
        </a>


        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="https://github.com/jswaroop123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jyothi-swaroop-n-9446912a9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </aside>
  );
}
