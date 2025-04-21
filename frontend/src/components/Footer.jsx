const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-8 bg-black text-gray-400 border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-center md:text-left">
          <p className="mb-2">Questions? Call 1-800-123-4567 Ask for Justin</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="hover:scale-[1.7] hover:rotate-[30deg] hover:skew-x-[25deg] hover:shadow-[0_0_100px_40px_magenta] hover:text-yellow-400 hover:saturate-[400%] hover:contrast-[300%] hover:hue-rotate-[360deg] hover:blur-[1px] transition-all duration-[800ms]">
              FAQ
            </a>
            <a href="#" className="hover:animate-bounce hover:scale-200 hover:rotate-12 hover:skew-x-12 hover:shadow-[0_0_100px_30px_rgba(255,0,0,0.9)] hover:text-yellow-400 hover:saturate-[300%] hover:contrast-200 transition-all duration-700">
              Movie Talk
            </a>
            <a href="#" className="hover:scale-150 hover:text-pink-400 hover:shadow-[0_0_50px_10px_pink] hover:rotate-6 hover:skew-y-3 hover:saturate-200 hover:hue-rotate-90 hover:contrast-200 transition-all duration-500">
              Locke & Key
            </a>
            <a href="#" className="hover:animate-ping hover:scale-[1.75] hover:rotate-[20deg] hover:skew-y-[15deg] hover:text-rose-600 hover:shadow-[0_0_80px_30px_#ff0000] hover:invert hover:contrast-[300%] transition-all duration-700">
              NETFLIX
            </a>
            <a href="#" className="hover:animate-bounce hover:text-pink-500 hover:scale-150 hover:rotate-6 hover:shadow-[0_0_20px_#ff00ff] hover:saturate-200 hover:skew-y-3 transition-all duration-300">
              Talk To Justin
            </a>
            <a href="#" className="hover:animate-pulse hover:text-orange-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,100,0,0.7)] hover:contrast-125 transition-all duration-300">
              Jobs
            </a>
            <a href="#" className="hover:animate-bounce hover:text-red-500 hover:scale-125 hover:shadow-[0_0_20px_red] transition-all duration-300">
              Project 3
            </a>
            <a href="#" className="hover:scale-125 hover:text-cyan-400 hover:shadow-[0_0_30px_cyan] hover:brightness-150 hover:skew-x-3 hover:rotate-1 transition-all duration-300">
              Video Games
            </a>
            <a href="#" className="hover:animate-bounce hover:text-red-500 hover:scale-125 hover:rotate-6 hover:shadow-[0_0_25px_5px_rgba(255,0,0,0.6)] hover:brightness-150 hover:saturate-200 hover:skew-y-1 transition-all duration-300 px-4 py-2 bg-white text-black border rounded">
              Terms of Use
            </a>
          </div>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Netflix Clone</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
