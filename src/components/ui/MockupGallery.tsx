
export function MockupGallery() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-10 scale-[1.02] lg:scale-105 origin-center py-8 lg:py-0">
      
      {/* Left Phone: Topluluk */}
      <div className="relative shrink-0 w-[80%] sm:w-[60%] lg:w-auto lg:h-[85%] aspect-[864/1820] z-20">
        <img src="/topluluk.webp" alt="Topluluk" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl scale-x-[1.08]" />
      </div>

      {/* Center Phone: Ana Sayfa */}
      <div className="relative shrink-0 w-[80%] sm:w-[60%] lg:w-auto lg:h-[95%] aspect-[864/1820] z-30">
        <img src="/ana-sayfa.webp?v=2" alt="Ana Sayfa" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl scale-x-[1.08]" />
      </div>

      {/* Right Phone: Klinik */}
      <div className="relative shrink-0 w-[80%] sm:w-[60%] lg:w-auto lg:h-[85%] aspect-[864/1820] z-20">
        <img src="/klinik.webp" alt="Klinik" className="w-full h-full object-contain pointer-events-none drop-shadow-2xl scale-x-[1.08]" />
      </div>

    </div>
  );
}
