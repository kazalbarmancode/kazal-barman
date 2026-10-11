"use client";
import React, { useState } from "react";
import PhotoMatcher from "./PhotoMatcher";

const RomanticLoveApp = () => {
  const [showLetter, setShowLetter] = useState(false);
  const [loveCount, setLoveCount] = useState(100);
  const [noButtonPos, setNoButtonPos] = useState({ top: "0px", left: "0px" });
  const [isHoveredNo, setIsHoveredNo] = useState(false);

  const girlfriendName = "Ananya Dhara ❤️";

  const getLoveMessage = () => {
    if (loveCount <= 100) {
      return "Just 100% ";
    } else if (loveCount >= 100 && loveCount <= 200) {
      return "Thik Ace Bujhechi ";
    } else if (loveCount >= 200 && loveCount <= 300) {
      return "Kutti ";
    } else if (loveCount >= 300 && loveCount <= 400) {
      return "It's ok Baby ";
    } else if (loveCount >= 400 && loveCount <= 500) {
      return "❤️I Love You❤️";
    } else if (loveCount >= 500 && loveCount <= 600) {
      return "Thank You Very Much ❤️";
    }
    return "Thak R Dekhaite Hbe Na ";
  };
  const reasonsToLove = [
    {
      title: "তোমার মিষ্টি হাসি",
      desc: "তোমার এক চিলতে হাসি আমার সারাদিনের ক্লান্তি দূর করে দেয়।",
    },
    {
      title: "তোমার যত্নশীল মন",
      desc: "তুমি যেভাবে সবার খেয়াল রাখো, তা আমাকে মুগ্ধ করে।",
    },
    {
      title: "আমার সেরা বন্ধু",
      desc: "তোমার কাছে আমি নিঃসংকোচে আমার মনের সব কথা বলতে পারি।",
    },
    {
      title: "তোমার উপস্থিতি",
      desc: "তুমি পাশে থাকলে পৃথিবীর সবকিছু সুন্দর মনে হয়।",
    },
  ];

  const moveNoButton = () => {
    const x = Math.floor(Math.random() * 150) - 75;
    const y = Math.floor(Math.random() * 150) - 75;
    setNoButtonPos({ top: `${y}px`, left: `${x}px` });
    setIsHoveredNo(true);
  };

  return (
    <div className="min-h-screen bg-linear-330 from-rose-100 via-pink-200 to-red-100 text-gray-800 font-sans p-4 sm:p-8 flex flex-col items-center">
      <header className="text-center my-8 animate-pulse">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-rose-600 drop-shadow-md">
          For {girlfriendName} ✨
        </h1>
        <p className="text-pink-700 mt-3 text-base sm:text-lg font-medium">
          তুমি আমার জীবনের সবচেয়ে সুন্দর উপহার! 💕
        </p>
      </header>

      <main className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-10 border border-pink-200 space-y-10">
        <section className="text-center">
          <h2 className="text-2xl font-bold text-rose-700 mb-3">
            প্রিয়তমা, তোমার জন্য ছোট্ট একটি ভালোবাসা... 🌹
          </h2>
          <p className="text-gray-600 leading-relaxed">
            তোমার হাসির মাঝে আমি আমার সমস্ত আনন্দ খুঁজে পাই। এই ছোট্ট
            ওয়েবসাইটটি কেবল তোমাকে হাসানোর জন্য এবং তোমার প্রতি আমার ভালোবাসা
            প্রকাশ করার জন্য বানানো।
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-pink-600 text-center mb-6">
            কেন তোমাকে এতো ভালোবাসি? 🌸
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasonsToLove.map((reason, index) => (
              <div
                key={index}
                className="bg-pink-50 p-5 rounded-2xl border border-pink-200 shadow-sm hover:shadow-md hover:scale-105 transition duration-300 cursor-pointer"
              >
                <h4 className="font-bold text-rose-600 text-lg mb-1">
                  {reason.title}
                </h4>
                <p className="text-gray-600 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        

        <PhotoMatcher partnerName={girlfriendName} />

        <section className="text-center">
          <button
            onClick={() => setShowLetter(!showLetter)}
            className="px-8 py-3 bg-linear-240 from-rose-500 to-pink-500 text-white font-bold rounded-full shadow-lg hover:from-rose-600 hover:to-pink-600 hover:scale-105 transition duration-200"
          >
            {showLetter
              ? "চিঠিটা লুকিয়ে রাখো 🙈"
              : "তোমার জন্য গোপন চিঠি খুলুন 💌"}
          </button>

          {showLetter && (
            <div className="mt-6 p-6 bg-rose-50 rounded-2xl border border-rose-300 shadow-inner text-left animate-fade-in">
              <h4 className="text-lg font-bold text-rose-700 mb-2">
                আমার হৃদয়ের রাণী,
              </h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                তুমি যখন হাসো, তখন মনে হয় পৃথিবীর সবচেয়ে সুন্দর দৃশ্যটি আমি
                দেখছি। তোমার প্রতিটি কথা, তোমার প্রতিটি রাগ-অভিমান আমার কাছে খুব
                প্রিয়। আমি সারাজীবন তোমার এই মিষ্টি হাসিটা দেখতে চাই।
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                কথা দিচ্ছি, সব পরিস্থিতিতে তোমার হাতটা এভাবেই শক্ত করে ধরে
                রাখবো।
              </p>
              <p className="text-right font-bold text-rose-600">
                — তোমার ভালোবাসার মানুষ ❤️
              </p>
            </div>
          )}
        </section>

        <section className="text-center pt-6 border-t border-pink-200">
          <h4 className="text-lg font-bold text-gray-700 mb-4">
            তুমি কি আমাকে অনেক ভালোবাসো? 🥺
          </h4>
          <div className="flex justify-center items-center gap-6 relative min-h-15">
            <button
              onClick={() => {
                if (loveCount < 700) {
                  setLoveCount(loveCount + 100);
                }
              }}
              className="px-6 py-2 bg-green-500 text-white font-bold rounded-full shadow-md hover:bg-green-600 hover:scale-110 transition"
            >
              হ্যাঁ, অনেক! 🥰
            </button>

            <button
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              style={{
                position: isHoveredNo ? "relative" : "static",
                top: noButtonPos.top,
                left: noButtonPos.left,
              }}
              className="px-6 py-2 bg-gray-400 text-white font-bold rounded-full shadow-md transition-all duration-150"
            >
              না 😜
            </button>
          </div>

          <p className="text-xs text-rose-500 mt-4 font-semibold">
            Love Meter: {loveCount}% ❤️
          </p>

          <p className="text-sm font-bold text-pink-600 mt-2 animate-bounce">
            {getLoveMessage()}
          </p>
        </section>
      </main>

      <footer className="mt-8 text-center text-sm text-pink-600 font-medium">
        Creat By Kazal Barman 💕
      </footer>
    </div>
  );
};

export default RomanticLoveApp;
