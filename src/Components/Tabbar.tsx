import html from "../assets/images/icons8-html-96.png";
import css from "../assets/images/icons8-css-96.png";
import js from "../assets/images/icons8-javascript-96.png";
import python from "../assets/images/icons8-python-96.png";
import { motion } from "framer-motion";
const Tabbar = () => {
  return (
    <>
      <div className=" text-black dark:bg-gray-900 dark:text-white  font-bold font-roboto text-2xl">
        <div className="container mx-auto p-8 ">
          <ul className="flex xl:flex-row justify-between items-center mx-auto xl:mx-32 ">
            <motion.li
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
            >
              <div className="flex flex-col items-center">
                <img
                  src={html}
                  alt="html"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <h1 className="text-center text-base lg:text-2xl">HTML</h1>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              
            >
              <div className="flex flex-col items-center">
                <img
                  src={css}
                  alt="css"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <h1 className="text-center text-base lg:text-2xl">CSS</h1>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <img src={js} alt="js" className="w-16 h-16 md:w-20 md:h-20" />
                <h1 className="text-center text-base lg:text-2xl">JavaScript</h1>
              </div>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center">
                <img
                  src={python}
                  alt="python"
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                <h1 className="text-center text-base lg:text-2xl">Python</h1>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Tabbar;
