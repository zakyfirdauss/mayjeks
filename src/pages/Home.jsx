import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ClosedEnvelope = () => (
  <svg viewBox="0 0 100 60" className="w-40 h-auto mx-auto mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="60" rx="4" fill="#F3E5AB" stroke="#D2B48C" strokeWidth="2"/>
    <path d="M0 0L50 35L100 0" stroke="#D2B48C" strokeWidth="2"/>
    <circle cx="50" cy="35" r="8" fill="#D22B2B" stroke="#8B0000" strokeWidth="2"/>
    <path d="M47 33.5C47 31 50 29 50 29C50 29 53 31 53 33.5C53 36 50 38 50 38C50 38 47 36 47 33.5Z" fill="white"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  // Fungsi membuat tombol "No" menjauh saat didekati
  const moveNoButton = () => {
    const x = Math.random() * 200 - 100; // Random horizontal
    const y = Math.random() * 100 - 50;  // Random vertical
    setNoButtonPosition({ x, y });
  };

  const handleYes = () => {
    navigate('/surat'); 
  };

  return (
    // bg-rose-50 sudah diganti menjadi bg-[#1B4D3E]
    <div className="min-h-screen bg-[#1B4D3E] flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background dekorasi */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-10 left-10 text-rose-200">✦</div>
        <div className="absolute bottom-20 right-10 text-rose-200">✦</div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full z-10 text-center"
      >
        <ClosedEnvelope />

        {/* text-gray-900 sudah diganti menjadi text-white */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-snug">
          KALO KAMU SAYANG AKU,<br />PILIH YANG BENER
        </h1>

        <div className="flex flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleYes}
            className="bg-emerald-500 text-white px-10 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-emerald-600 transition-colors cursor-pointer"
          >
            Yes
          </motion.button>

          <motion.button
            onMouseEnter={moveNoButton} 
            animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-slate-300 text-slate-700 px-10 py-3 rounded-xl font-bold text-lg shadow hover:bg-slate-400 transition-colors cursor-pointer"
          >
            No
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}