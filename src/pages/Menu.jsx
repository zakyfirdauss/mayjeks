import { motion } from 'framer-motion';
import { Star, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

export default function Menu() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Daftar foto carousel bawah (infinite loop ke kanan)
  const carouselPhotos = [5, 6, 7, 8, 5, 6, 7, 8, 5, 6, 7, 8];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const offset = clientWidth * 0.75;
      
      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
      } else {
        if (scrollLeft <= 20) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'auto' });
        } else {
          scrollRef.current.scrollBy({ left: -offset, behavior: 'smooth' });
        }
      }
    }
  };

  const handleStarClick = (selectedStar) => {
    setRating(selectedStar);
    if (selectedStar < 5) {
      setIsSuccess(false);
      setErrorMessage('ULANG GAK?!!?!');
    } else {
      setErrorMessage('');
      setIsSuccess(true);
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#1B4D3E] flex flex-col items-center py-12 px-4 md:px-8 font-sans text-white overflow-x-hidden relative"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"' }}
    >
      
      {/* Dekorasi Bintang di Background */}
      <div className="absolute top-10 left-10 text-emerald-300 opacity-30 text-2xl animate-pulse">✦</div>
      <div className="absolute top-32 right-16 text-emerald-300 opacity-30 text-3xl">✨</div>
      <div className="absolute bottom-20 left-20 text-emerald-300 opacity-30 text-3xl">💌</div>

      {/* Tombol Kembali ke Awal */}
      <div className="w-full max-w-xl flex justify-start mb-4 z-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm text-sm"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Awal</span>
        </button>
      </div>

      {/* CONTAINER UTAMA */}
      <div className="w-full max-w-xl flex flex-col gap-10 z-10">

        {/* 1. BAGIAN SURAT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full px-2 pt-2"
        >
          <div className="text-emerald-50 text-base md:text-lg font-serif leading-relaxed space-y-4 bg-transparent text-left md:text-justify">
            <p>
              Hai Yaya sayaaaang,
            </p>
            <p>
              Ga kerasa gak sih men udah tiba-tiba setahun aja hehe 😁 perasaan baru kemarin gasih kita pdktan terus pertama kali aku jemput kamu di stasiun bandung yang kamu notice aku pertama kali gara-gara pake halfzip ijo kesukaan kamu, terus sekarang udah setahun lebih aja gakerasa yaw, nempel-nempel terus kayak prangko dong. Makasih banyak ya bubiez, udah mau nerima segala kegajelasan gue, jokes garing, dan mau masuk ke hidup aku selama setahun ke belakang.
            </p>
            <p>
              Jyujurrr, punya pacar kayak kamu tuh rasanya seperti anda menjadi iron man. Gatau pokonya rasanya tuh kek seneng terus bangga punya pacar yang independent women segala bisa juga, Go Yoon-jung lewat jauh.
            </p>
            <p>
              Makasih yaa sayang udah jadi rumah paling nyaman buat pulang, tempat yang selalu dengerin keluh kesah aku. Maaf ya kalau selama setahun ini aku masih sering bikin pusing atau ada salah-salah kata. Tapi satu hal yang pasti, aku bakal berusaha terus jadi yang terbaik buat kamu.
            </p>
            <p className="text-center font-medium text-amber-200 pt-2">
              Happy 1st anniversary ya, Yaya! Semoga kedepannya kita bareng-bareng terus, dan gaada sesuatu yang buat kita pisah. I love you so much, bubiez! 💕💗
            </p>
          </div>
        </motion.div>


        {/* 2. BAGIAN TENGAH: KOLASE POLAROID (FOTO 1 - 4) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <div className="text-center mb-4">
            <span className="font-serif text-emerald-100 font-medium text-sm tracking-widest uppercase opacity-80">
              ✦ Our Memories ✦
            </span>
          </div>

          {/* Grid Polaroid */}
          <div className="grid grid-cols-2 gap-5 md:gap-6">
            
            {/* Polaroid 1 */}
            <div className="bg-white p-3.5 rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/40 flex flex-col items-center">
              <div className="w-full h-36 md:h-44 bg-gray-100 rounded overflow-hidden flex items-center justify-center relative">
                <img src="/foto1.jpeg" alt="Momen 01" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="bg-white p-3.5 rounded-lg shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/40 flex flex-col items-center mt-4">
              <div className="w-full h-36 md:h-44 bg-gray-100 rounded overflow-hidden flex items-center justify-center relative">
                <img src="/foto2.jpeg" alt="Momen 02" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Polaroid 3 */}
            <div className="bg-white p-3.5 rounded-lg shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-white/40 flex flex-col items-center">
              <div className="w-full h-36 md:h-44 bg-gray-100 rounded overflow-hidden flex items-center justify-center relative">
                <img src="/foto3.jpeg" alt="Momen 03" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Polaroid 4 */}
            <div className="bg-white p-3.5 rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/40 flex flex-col items-center mt-4">
              <div className="w-full h-36 md:h-44 bg-gray-100 rounded overflow-hidden flex items-center justify-center relative">
                <img src="/foto4.jpeg" alt="Momen 04" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </motion.div>


        {/* 3. FITUR KARAUSEL FOTO (FOTO 5 - 8) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mt-2 relative"
        >
          <div className="relative flex items-center">
            {/* Tombol Geser Kiri */}
            <button 
              onClick={() => scroll('left')}
              className="absolute -left-3 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer shadow-lg hidden md:flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Area Carousel Geser Horizontal */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto space-x-4 pb-2 pt-2 px-1 scrollbar-none snap-x snap-mandatory w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {carouselPhotos.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-48 md:w-56 bg-white p-3.5 rounded-lg shadow-xl snap-center border border-white/40 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-full h-36 md:h-44 bg-gray-100 rounded overflow-hidden flex items-center justify-center relative">
                    <img src={`/foto${item}.jpeg`} alt={`Kenangan ${item}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* Tombol Geser Kanan */}
            <button 
              onClick={() => scroll('right')}
              className="absolute -right-3 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer shadow-lg hidden md:flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>


        {/* 4. BAGIAN BAWAH: RATING BINTANG 5 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full px-4 py-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl text-center flex flex-col items-center gap-4"
        >
          <h3 className="font-serif font-bold text-lg md:text-xl text-amber-200 tracking-wide">
            Seberapa sayang Yaya ke Jekk? 🤍
          </h3>

          {/* Deretan Bintang Interaktif */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleStarClick(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="cursor-pointer transform hover:scale-125 transition-transform duration-200 focus:outline-none"
              >
                <Star
                  size={32}
                  className={`${
                    (hoverRating || rating) >= star
                      ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]'
                      : 'text-white/40'
                  } transition-colors`}
                />
              </button>
            ))}
          </div>

          {/* Pesan Error jika memilih < 5 */}
          {errorMessage && (
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="text-rose-200 font-serif font-bold text-base md:text-lg bg-rose-600/40 border border-rose-500/50 px-5 py-2.5 rounded-xl shadow-lg tracking-wider"
            >
              {errorMessage}
            </motion.p>
          )}

          {/* Pesan Sukses jika memilih 5 */}
          {isSuccess && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="text-amber-200 font-serif font-bold text-base md:text-lg bg-amber-500/20 border border-amber-500/40 px-5 py-2.5 rounded-xl shadow-lg tracking-wider"
            >
              MANG EAK PRUY?
            </motion.div>
          )}
        </motion.div>

        {/* Footer Kecil */}
        <div className="text-center text-emerald-200/60 text-xs py-4 font-serif">
          Made with all my love for Yaya 🌸
        </div>

      </div>

    </div>
  );
}