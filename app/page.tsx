"use client"


import Keyboard from "@/components/Keyboard/Keyboard";
import { motion } from "motion/react"


export default function Home() {
  return (
    <motion.main
      initial={{
        opacity: 0,
        filter: `blur(10px)`
      }}
      animate={{
        opacity: 1,
        filter: `blur(0px)`
      }}
      transition={{
        delay: 0.2,
        duration: 0.5,
        ease: "easeIn"
      }}
      className="min-h-screen flex-col justify-evenly font-sans bg-black-950 text-white flex items-center">
      <Keyboard />
      <footer className="font-sans text-sm cursor-pointer">
        <a href="https://x.com/Vineet2OP" target="_blank" rel="noopener noreferrer" className="hover:underline">  Design and Developed By <span className="">@Vineet🦉</span></a>
      </footer>
    </motion.main>
  );
}
