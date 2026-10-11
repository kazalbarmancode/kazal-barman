import Image from 'next/image';
import React, { useState } from 'react';

const PhotoMatcher = ({partnerName={girlfriendName}}) => {
   const [myPhoto, setMyPhoto] = useState(null);
  const [partnerPhoto, setPartnerPhoto] = useState(null);
  const [isMatching, setIsMatching] = useState(false);
  const [matched, setMatched] = useState(false);

  const handleMyPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setMyPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handlePartnerPhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPartnerPhoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleMatchPhotos = () => {
    if (!myPhoto || !partnerPhoto) {
      alert("দয়া করে দুটি ছবিই সিলেক্ট করুন! 💕");
      return;
    }
    setIsMatching(true);
    setTimeout(() => {
      setIsMatching(false);
      setMatched(true);
    }, 1500);
  };

  return (
    <section className="bg-pink-50/70 rounded-3xl p-6 border border-pink-200 text-center shadow-inner">
      <h3 className="text-xl font-bold text-rose-600 mb-2">
        📸 Couple Photo  💖
      </h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-6">
        তোমার এবং আমার একটি করে ছবি আপলোড করো, দেখো ম্যাজিক!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
        <div className="flex flex-col items-center">
          <label className="w-28 h-28 border-2 border-dashed border-rose-400 rounded-full flex items-center justify-center bg-white cursor-pointer overflow-hidden shadow-md hover:border-rose-600 transition">
            {myPhoto ? (
              <Image src={myPhoto} alt="My Photo" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-rose-500 font-semibold text-center p-2">+ তোমার ছবি</span>
            )}
            <input type="file" accept="image/*" onChange={handleMyPhotoChange} className="hidden" />
          </label>
          <span className="text-xs text-gray-600 mt-2 font-medium">Kazal Barman 🤵</span>
        </div>

        <span className="text-2xl text-rose-500 font-bold animate-bounce">➕</span>

        <div className="flex flex-col items-center">
          <label className="w-28 h-28 border-2 border-dashed border-rose-400 rounded-full flex items-center justify-center bg-white cursor-pointer overflow-hidden shadow-md hover:border-rose-600 transition">
            {partnerPhoto ? (
              <Image src={partnerPhoto} alt="Her Photo" className="w-full h-full object-cover" />
            ) : (
              <span className="text-xs text-rose-500 font-semibold text-center p-2">+ প্রিয়ার ছবি</span>
            )}
            <input type="file" accept="image/*" onChange={handlePartnerPhotoChange} className="hidden" />
          </label>
          <span className="text-xs text-gray-600 mt-2 font-medium">{partnerName} 👸</span>
        </div>
      </div>

      <button
        onClick={handleMatchPhotos}
        disabled={isMatching}
        className="px-6 py-2.5 bg-white from-pink-500 to-rose-500 text-blue-600 font-bold rounded-full shadow-md hover:scale-105 transition duration-200 disabled:opacity-50"
      >
        {isMatching ? "স্মৃতিগুলো মেলানো হচ্ছে... ✨" : "আমাদের ছবি একসাথে মেলাও 💖"}
      </button>

      {matched && (
        <div className="mt-8 p-6 bg-white rounded-2xl border-2 border-rose-300 shadow-lg animate-fade-in flex flex-col items-center">
          <h4 className="text-rose-600 font-bold mb-4 text-lg">
            Perfect Match Made in Heaven! 👩‍❤️‍👨
          </h4>
          <div className="relative flex items-center justify-center bg-linear-to from-pink-200 via-rose-200 to-purple-200 p-4 rounded-3xl shadow-md border border-pink-300">
            <Image
              src={myPhoto}
              alt="My Combined"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-l-2xl border-2 border-white shadow-md -mr-3 z-10 transform -rotate-3"
            />
            <div className="absolute z-30 bg-white p-2 rounded-full shadow-lg border border-pink-300 text-xl animate-pulse">
              ❤️
            </div>
            <Image
              src={partnerPhoto}
              alt="Her Combined"
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-r-2xl border-2 border-white shadow-md -ml-3 z-20 transform rotate-3"
            />
          </div>
          <p className="mt-4 text-sm font-semibold text-rose-500">
            Love Match Score: 100% 💕 (আমরা সবসময় একসাথে সুন্দর!)
          </p>
        </div>
      )}
    </section>
  )
};

export default PhotoMatcher;