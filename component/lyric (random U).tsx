"use client";
import { AnimatePresence, motion } from "framer-motion";
import localfont from "next/font/local";
import { FC, useEffect, useState } from "react";

const vale = localfont({
  src: "../public/font/Okesip.ttf",
});

export const splitTextIntoLines = (texts: string[]) => {
  return texts.map((text, index) => ({
    id: index,
    words: text.split(" "),
  }));
};

const texts = [
  "Do you Think I've Forgotten???",
  "Do you Think I've Forgotten??",
  "Do you Think I've Forgotten",
  "ABOUTTTTTT",
];
const lines = splitTextIntoLines(texts);

const AnimatedHeading: FC = () => {
  const [line1Over, setLine1Over] = useState(false);
  const [showUAnimation, setShowUAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLine1Over(true);
    }, 13500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (texts.includes("ABOUTTTTTT")) {
      const timer = setTimeout(() => {
        setShowUAnimation(true);
      }, 15000); // Change this delay to your desired value
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      style={vale.style}
    >
      <AnimatePresence>
        {lines.map(({ id, words }, lineIndex) => {
          if (lineIndex == 3) {
            return (
              <AnimatePresence key={id}>
                {!showUAnimation && (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: 0.9 * words.length,
                      delay: lineIndex * 4.5,
                    }}
                    className="mb-4"
                  >
                    {words.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 * wordIndex }}
                        className="inline-block mx-1 text-4xl"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
          return (
            <AnimatePresence key={id}>
              {!line1Over && (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    y: -20,
                    transition: { duration: 1.5, ease: "easeInOut" },
                  }}
                  transition={{
                    duration: 0.9 * words.length,
                    delay: lineIndex * 4.5,
                  }}
                  className="mb-4"
                >
                  {words.map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: lineIndex * 4.5 + wordIndex * 0.5,
                      }}
                      className="inline-block mx-1 text-4xl"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
        {line1Over && showUAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            {Array.from(Array(100), (_, index) => {
              const randomColor = `rgb(${Math.floor(
                Math.random() * 256
              )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
              )})`;
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: Math.random() * 0.5 + 0.5,
                    delay: 0.5,
                  }}
                  style={{
                    fontSize: "10rem",
                    position: "absolute",
                    top: `${Math.random() * 100}vh`,
                    left: `${Math.random() * 100}vw`,
                    color: randomColor,
                  }}
                >
                  U
                </motion.span>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeading;
