
export function MockupGallery() {
  return (
    <div className="w-full h-full flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 scale-[1.02] sm:scale-105 origin-center">
      
      {/* Left Phone: Topluluk */}
      <div className="relative shrink-0 h-[85%] sm:h-[90%] aspect-[864/1820] z-20">
        <img src="/topluluk.png" alt="Topluluk" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl scale-x-[1.08]" />
      </div>

      {/* Center Phone: Ana Sayfa */}
      <div className="relative shrink-0 h-[95%] sm:h-[100%] aspect-[864/1820] z-30">
        <img src="/ana-sayfa.png?v=2" alt="Ana Sayfa" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl scale-x-[1.08]" />
      </div>

      {/* Right Phone: Klinik */}
      <div className="relative shrink-0 h-[85%] sm:h-[90%] aspect-[864/1820] z-20">
        <img src="/klinik.png" alt="Klinik" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl scale-x-[1.08]" />
      </div>

    </div>
  );
}
