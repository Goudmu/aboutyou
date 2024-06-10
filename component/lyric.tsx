"use client";
import { AnimatePresence, motion } from "framer-motion";
import localfont from "next/font/local";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

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
  "There was something 'bout you that now I can't remember",
  "It's the same damn thing that made my heart surrender",
  "And I miss you on a train, I miss you in the morning",
  "I never know what to think about",
  "I think about you",
];
const lines = splitTextIntoLines(texts);

const AnimatedHeading = ({ setaboutYou, hp }: any) => {
  const [line1Over, setLine1Over] = useState(false);
  const [line2Over, setline2Over] = useState(false);
  const [line5Over, setline5Over] = useState(false);
  const [line6Over, setline6Over] = useState(false);
  const [line7Over, setline7Over] = useState(false);
  const [line8Over, setline8Over] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLine1Over(true);
    }, 15700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setline2Over(true);
    }, 20500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setline5Over(true);
    }, 20500 + 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setline6Over(true);
    }, 20500 + 4500 + 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setline7Over(true);
    }, 20500 + 4500 + 5000 + 5500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setline8Over(true);
    }, 20500 + 4500 + 5000 + 5500 + 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setaboutYou(false);
    }, 46000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className=" relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden "
      style={vale.style}
    >
      <audio autoPlay>
        <source src="/song/aboutyou.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <AnimatePresence>
        {lines.map(({ id, words }, lineIndex) => {
          if (lineIndex == 3) {
            return (
              <AnimatePresence key={id}>
                {!line1Over && (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      y: -50,
                      transition: { duration: 0.25 },
                    }}
                    transition={{
                      duration: 0.9 * words.length,
                      delay: lineIndex * 5,
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
                          delay: lineIndex * 5 + wordIndex * 0.6,
                        }}
                        className="inline-block mx-1 text-6xl"
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
          if (lineIndex == 4) {
            return (
              <AnimatePresence key={id}>
                {line2Over && line1Over && !line7Over && (
                  <motion.div
                    key={id}
                    style={{ marginBottom: "20px", position: "absolute" }}
                    initial={{ opacity: 0, scale: 0.5, y: 0, x: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: `-30vh`,
                      x: `10vw`,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {words.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: wordIndex * 0.4,
                        }}
                        className={`inline-block mx-1 text-center p-4`}
                        style={{
                          fontSize: `${hp ? "8px" : "14px"}`,
                          backgroundColor: "rgb(147,197,253)",
                          padding: `${hp ? "1px" : "6px"}`,
                          margin: `${hp ? "2px 2px" : "5px 5px"}`,
                        }}
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
          if (lineIndex == 5) {
            return (
              <AnimatePresence key={id}>
                {line5Over && !line7Over && (
                  <motion.div
                    key={id}
                    style={{ marginBottom: "20px", position: "absolute" }}
                    initial={{ opacity: 0, scale: 0.5, y: 0, x: 0 }}
                    animate={{ opacity: 1, scale: 1, y: `-20vh`, x: `-15vw` }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {words.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: wordIndex * 0.45,
                        }}
                        className={`inline-block mx-1 text-center p-4`}
                        style={{
                          fontSize: `${hp ? "8px" : "14px"}`,
                          backgroundColor: "rgb(252, 165,165)",
                          padding: `${hp ? "1px" : "6px"}`,
                          margin: `${hp ? "2px 2px" : "5px 5px"}`,
                        }}
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
          if (lineIndex == 6) {
            return (
              <AnimatePresence key={id}>
                {line6Over && !line7Over && (
                  <motion.div
                    key={id}
                    style={{ marginBottom: "20px", position: "absolute" }}
                    initial={{ opacity: 0, scale: 0.5, y: 0, x: 0 }}
                    animate={{ opacity: 1, scale: 1, y: `-10vh`, x: `7vw` }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                      transition: { duration: 1.5, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {words.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: wordIndex * 0.35,
                        }}
                        className={`inline-block mx-1 text-center p-4`}
                        style={{
                          fontSize: `${hp ? "8px" : "14px"}`,
                          backgroundColor: "rgb(134, 239,17)",
                          padding: `${hp ? "1px" : "6px"}`,
                          margin: `${hp ? "2px 2px" : "5px 5px"}`,
                        }}
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
          if (lineIndex == 7) {
            return (
              <AnimatePresence key={id}>
                {line7Over && !line8Over && (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      y: -20,
                      transition: { duration: 0.25, ease: "easeInOut" },
                    }}
                    transition={{
                      duration: 0.9 * words.length,
                      delay: (lineIndex - 7) * 4.5,
                    }}
                  >
                    {words.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: (lineIndex - 7) * 3.5 + wordIndex * 0.3,
                        }}
                        style={{
                          fontSize: "14px",
                          padding: "6px",
                        }}
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
          if (lineIndex == 8) {
            return (
              <AnimatePresence key={id}>
                {line8Over && (
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
                      duration: 0.25 * words.length,
                      delay: 0.25,
                    }}
                  >
                    {words.map((word, wordIndex) => (
                      <motion.span
                        key={wordIndex}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.25 + wordIndex * 0.4,
                        }}
                        style={{
                          fontSize: "14px",
                          padding: "6px",
                        }}
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          } else {
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
                          delay: lineIndex * 4.5 + wordIndex * 0.6,
                        }}
                        className="inline-block mx-1 text-6xl"
                      >
                        {word + " "}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            );
          }
        })}
        {line1Over && !line2Over && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden bg-white"
            style={{ overflow: "hidden" }}
          >
            {Array.from(Array(hp ? 50 : 250), (_, index) => {
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
                    fontSize: "14px",
                    position: "absolute",
                    top: `${Math.random() * 95}vh`,
                    left: `${Math.random() * 95}vw`,
                    color: randomColor,
                  }}
                >
                  U
                </motion.span>
              );
            })}
          </motion.div>
        )}
        {line8Over && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden bg-white"
            style={{ overflow: "hidden" }}
          >
            {Array.from(Array(hp ? 25 : 50), (_, index) => {
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
                    fontSize: "14px",
                    position: "absolute",
                    top: `${Math.random() * 90}vh`,
                    left: `${Math.random() * 90}vw`,
                    color: randomColor,
                  }}
                >
                  I think about you
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
