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
  "Do you Think I've Forgotten",
  "Do you Think I've Forgotten",
  "Do you Think I've Forgotten",
  "About YOUUUUUUUUUUUUUUUU",
];
const lines = splitTextIntoLines(texts);

const AnimatedHeading: FC = () => {
  const [line1Over, isline1Over] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      isline1Over(true);
    }, 13500);

    return () => clearTimeout(timer);
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
        })}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeading;

{
  /* {texts.map((text, index) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <h1 className="text-4xl">{text}</h1>
      </motion.div>
    );
  })} */
}
