import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-150 overflow-hidden flex flex-col items-center justify-center bg-[#0B0F19] text-white relative">

      <div className="relative z-10 text-center px-6">
        {/* Big Animated 404 Number */}
        <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none 
                       text-transparent bg-clip-text 
                       bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#22D3EE]
                       drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]
                       animate-bounce">
          404
        </h1>

        <h2 className="mt-2 text-2xl md:text-4xl font-bold tracking-wide">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8B5CF6]/40"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;