export default function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Colon Cancer Prediction */}
        <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Colon Cancer Prediction</h3>
          <p className="text-gray-300 mb-3">
            Developed a user-friendly interface using <span className="font-medium text-white">Python</span> and <span className="font-medium text-white">Streamlit</span> to detect
            cancer tissues from uploaded images, utilizing <span className="font-medium text-white">machine learning</span> techniques for prediction.
          </p>
          <a
            href="https://github.com/jagadish018/colon_cancer_prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline text-sm"
          >
            View on GitHub →
          </a>
        </div>

        {/* Fileless Malware Detection */}
        <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Fileless Malware Detection</h3>
          <p className="text-gray-300 mb-3">
            Explored methods to detect fileless malware using <span className="font-medium text-white">FTK Imager</span> and <span className="font-medium text-white">Volatility Framework 3.2</span> 
            for forensic memory analysis and threat identification.
          </p>
          <a
            href="https://github.com/jswaroop123/FileLess_Malware"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline text-sm"
          >
            View on GitHub →
          </a>
        </div>

        {/* Movie REST API */}
        <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Movie REST API</h3>
          <p className="text-gray-300 mb-3">
            Built a <span className="font-medium text-white">RESTful API</span> for managing movies, including features for 
            <span className="font-medium text-white"> Node.js</span>, <span className="font-medium text-white">Hono</span>, 
            <span className="font-medium text-white">Prisma</span>, and <span className="font-medium text-white">Neon.tech</span>.
          </p>
          <a
            href="https://github.com/jswaroop123/MoviesREST"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline text-sm"
          >
            View on GitHub →
          </a>
        </div>

        {/* Hacker News Clone */}
        <div className="bg-gray-800 rounded-xl p-5 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-400">Hacker News Clone</h3>
          <p className="text-gray-300 mb-3">
            Built a fully functional clone of the popular Hacker News platform with real-time post feeds, upvotes, and comments 
            using <span className="font-medium text-white">Next.js</span>, <span className="font-medium text-white">Tailwind CSS</span>, and 
            <span className="font-medium text-white"> Firebase</span>.
          </p>
          <a
            href="https://github.com/jswaroop123/HackerNews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline text-sm"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
