const Footer = () => {
  return (
    <footer className="py-6 md:px-8 md:py-8 bg-black text-gray-400 border-t border-gray-800">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-center md:text-left">
          <p className="mb-2">Questions? Call 1-800-123-4567 Ask for Justin</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="#" className="hover:animate-firework hover:text-red-500 hover:drop-shadow-[0_0_30px_red] transition-all duration-300">
              FAQ
            </a>
            <a href="#" className="hover:animate-spiral hover:text-blue-500 hover:drop-shadow-[0_0_25px_blue] transition-all duration-700">
              Movie Talk
            </a>
            <a href="#" className="hover:animate-wave hover:text-purple-500 hover:drop-shadow-[0_0_20px_purple] transition-all duration-500">
              Locke & Key
            </a>
            <a href="#" className="hover:animate-ping hover:scale-[1.75] hover:rotate-[20deg] hover:skew-y-[15deg] hover:text-rose-600 hover:shadow-[0_0_80px_30px_#ff0000] hover:invert hover:contrast-[300%] transition-all duration-700">
              NETFLIX
            </a>
            {/* Bouncing balls effect on "Talk To Justin" */}
            <a href="#" className="relative inline-block group hover:text-pink-500 transition-all duration-300">
              Talk To Justin
              <span className="absolute inset-0 pointer-events-none">
                <span className="absolute w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 left-1/2 top-1/2 [--tx:30px] [--ty:-40px]" />
                <span className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 group-hover:delay-75 left-1/2 top-1/2 [--tx:-30px] [--ty:-35px]" />
                <span className="absolute w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 group-hover:delay-150 left-1/2 top-1/2 [--tx:40px] [--ty:10px]" />
                <span className="absolute w-2 h-2 bg-yellow-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 group-hover:delay-100 left-1/2 top-1/2 [--tx:-40px] [--ty:15px]" />
                <span className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 group-hover:delay-200 left-1/2 top-1/2 [--tx:0px] [--ty:-50px]" />
                <span className="absolute w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 group-hover:delay-300 left-1/2 top-1/2 [--tx:20px] [--ty:40px]" />
                <span className="absolute w-2 h-2 bg-orange-500 rounded-full opacity-0 group-hover:animate-bounce-out group-hover:opacity-100 group-hover:delay-250 left-1/2 top-1/2 [--tx:-20px] [--ty:35px]" />
              </span>
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