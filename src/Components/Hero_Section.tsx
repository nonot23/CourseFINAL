import { useState} from "react";
import hero from "../assets/images/hero.webp";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const Hero_Section = () => {
  const [showCursor, setShowCursor] = useState(true);
  return (
    <>
      <div className="hero bg-base-200 dark:bg-gray-500 py-4 xl:py-16">
        <div className="container mx-auto p-8 xl:px-16 hero-content  flex-col xl:flex-row-reverse  xl:justify-between">
          <motion.img
            src={hero}
            alt="DEVELOPER"
            className=" md:w-96 xl:max-w-sm rounded-lg shadow-2xl mb-5 xl:mb-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          />
          <motion.div
            className="space-y-5  text-center  xl:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="font-bold  text-[var(--color-primary)] text-2xl xl:text-4xl ">
              <TypeAnimation
                sequence={["เปลี่ยนความฝันสู่การเป็น Developer มืออาชีพ", 1000, () => setShowCursor(false)]}
                speed={40}
                repeat={0}
                cursor={showCursor}
                
              />
            </h1>
            <h2 className="font-bold text-[18px] xl:text-[25px] ">
              เรียนออนไลน์แบบยืดหยุ่น หลากหลายภาษาโปรแกรมมิ่งยอดนิยม
              <br /> เนื้อหาที่เข้าใจง่าย สามารถเรียนได้ทุกที่ ทุกเวลา
            </h2>
            <div>
              <button className="btn btn-primary font-roboto xl:text-[17px]  xl:h-11 hover:cursor-pointer hover:bg-cyan-900">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
