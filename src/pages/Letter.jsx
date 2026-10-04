import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Delete } from 'lucide-react';

export default function Letter() {
  const navigate = useNavigate();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const correctPin = '22072025';

  const handleNumberClick = (num) => {
    if (pin.length < 8) {
      const newPin = pin + num;
      setPin(newPin);
      setError(false);

      // Jika sudah 8 digit, cek PIN
      if (newPin.length === 8) {
        if (newPin === correctPin) {
          navigate('/menu');
        } else {
          setError(true);
          setTimeout(() => {
            setPin('');
            setError(false);
          }, 800);
        }
      }
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
    setError(false);
  };

  return (
    <div 
      className="min-h-screen bg-[#1B4D3E] flex flex-col items-center justify-center p-4 font-sans text-white overflow-hidden relative select-none"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"' }}
    >
      
      {/* Dekorasi Bintang di Background */}
      <div className="absolute top-10 left-10 text-emerald-300 opacity-30 text-2xl animate-pulse">✦</div>
      <div className="absolute top-32 right-16 text-emerald-300 opacity-30 text-3xl">✨</div>
      <div className="absolute bottom-20 left-20 text-emerald-300 opacity-30 text-3xl">💌</div>

      {/* Kotak Utama PIN / Keypad */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl flex flex-col items-center z-10"
      >
        
        {/* Ikon Hati */}
        <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center shadow-lg mb-4 text-white">
          <Heart size={24} className="fill-white" />
        </div>

        {/* Judul & Hint */}
        <h2 className="font-serif font-bold text-xl md:text-2xl text-rose-200 tracking-wide mb-1 text-center">
          Tanggal apa hayoh
        </h2>
        <p className="text-xs text-emerald-200/70 font-serif mb-6 text-center">
          Format: DDMMYYYY
        </p>

        {/* Kotak Indikator Digit PIN */}
        <motion.div 
          animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="flex gap-2 mb-8"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`w-8 h-10 md:w-9 md:h-12 rounded-xl border flex items-center justify-center text-lg font-bold transition-all ${
                error 
                  ? 'border-rose-400 bg-rose-500/20 text-rose-200' 
                  : pin[i] 
                  ? 'border-white bg-white/20 text-white shadow-md' 
                  : 'border-white/30 bg-white/5 text-transparent'
              }`}
            >
              {pin[i] ? '•' : ''}
            </div>
          ))}
        </motion.div>

        {/* Keypad Angka */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-14 bg-white/15 hover:bg-white/25 active:bg-white/35 rounded-2xl font-serif text-xl font-bold flex items-center justify-center transition-colors cursor-pointer border border-white/10 shadow-sm"
            >
              {num}
            </button>
          ))}
          
          <div className="col-start-2">
            <button
              onClick={() => handleNumberClick('0')}
              className="w-full h-14 bg-white/15 hover:bg-white/25 active:bg-white/35 rounded-2xl font-serif text-xl font-bold flex items-center justify-center transition-colors cursor-pointer border border-white/10 shadow-sm"
            >
              0
            </button>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={handleDelete}
              className="w-full h-14 bg-white/15 hover:bg-rose-500/30 active:bg-rose-500/40 rounded-2xl font-serif flex items-center justify-center transition-colors cursor-pointer border border-white/10 shadow-sm text-rose-200"
            >
              <Delete size={22} />
            </button>
          </div>
        </div>

      </motion.div>

    </div>
  );
}