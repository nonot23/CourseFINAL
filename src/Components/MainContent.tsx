import React, { useState } from "react";
import login from "../assets/images/login.png";
import watch from "../assets/images/watch.png";
import Dev from "../assets/images/Dev.png";
import { motion } from "framer-motion";


const MainContent = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });                                                                                                                                                                                                                                                               

  const handleClick = () => {
    alert("ส่งข้อความของคุณเรียบร้อยแล้ว!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();
  return (
    <>
      <main className="font-kanit bg-gray-100 dark:text-white  dark:bg-gray-900 py-8">
        <div className="container mx-auto p-8 ">
          <div className="flex items-center justify-center">
            <h1 className="text-[var(--color-primary)] dark:text-white font-bold text-2xl xl:text-3xl">
              เริ่มต้นเรียนรู้
            </h1>
          </div>
          <ul className="flex flex-rows items-center justify-center lg:gap-36 ">
            <motion.li
              className="text-center md:text-[18px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={login} alt="เริ่มต้นลงทะเบียน" className="w-60 h-60  q  " />
              <p>เริ่มต้นลงทะเบียน</p>
              <p>login และเข้าใช้งานได้เลย</p>
            </motion.li>
            <motion.li
              className="text-center md:text-[18px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={watch} alt="ดูคอร์สเรียน" className="w-60 h-60" />
              <p>เลือกหมวดหมู่</p>
              <p>แล้วดูคอร์สเรียนได้เลย</p>
            </motion.li>
          </ul>
        </div>
      </main>
      <main className="font-kanit  py-8   dark:bg-gray-800">
        <div className="container mx-auto p-8 mb-15 ">
          <h1 className="text-2xl xl:text-3xl dark:text-white font-semibold text-[var(--color-primary)] text-center">
            รีวิวจากผู้เรียนกับเว็บไซต์ของเรา
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center mt-10 md:gap-5">
            <motion.div className="card w-80 bg-base-100 shadow-xl m-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <p className="text-sm md:text-base ">
                  "เว็บไซต์นี้ทำให้การเรียนออนไลน์เป็นเรื่องง่ายและสนุกมาก!
                  คอร์สเรียนมีคุณภาพสูงและเข้าใจง่าย"
                </p>
                <div className="card-actions justify-start mt-4">
                  <div className="flex items-center gap-2">
                    <img src={Dev} alt="" className="w-12 h-12 rounded-2xl" />
                    <span>สมปอง</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="card w-80 bg-base-100 shadow-xl m-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <p className="text-sm md:text-base">
                  "เข้าใจง่ายแม้ไม่มีพื้นฐานมาก่อน!"
                </p>
                <div className="card-actions justify-start mt-4">
                  <div className="flex items-center gap-2">
                    <img src={Dev} alt="" className="w-12 h-12 rounded-2xl" />
                    <span>สมศรี</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="card w-80 bg-base-100 shadow-xl m-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <p className="text-sm md:text-base">
                  "คอร์สมีความเป็นระบบ เหมาะกับคนชอบเรียนรู้ด้วยตัวเอง"
                </p>
                <div className="card-actions justify-start mt-4">
                  <div className="flex items-center gap-2">
                    <img src={Dev} alt="" className="w-12 h-12 rounded-2xl" />
                    <span>สมหมาย</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="card w-80 bg-base-100 shadow-xl m-5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-body">
                <p className="text-sm md:text-base">
                  "คอร์สมีความเป็นระบบ เหมาะกับคนชอบเรียนรู้ด้วยตัวเอง"
                </p>
                <div className="card-actions justify-start mt-4">
                  <div className="flex items-center gap-2">
                    <img src={Dev} alt="" className="w-12 h-12 rounded-2xl" />
                    <span>สมชาย</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <main className="font-kanit bg-gray-100 dark:bg-gray-900 py-8" id="Contact">
        <div className="container mx-auto p-8 mb-5">
          <h1 className="text-2xl xl:text-3xl dark:text-white font-semibold text-[var(--color-primary)] text-center">
            ติดต่อเรา
          </h1>
          <form className="max-w-6xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                type="text"
                placeholder="ชื่อ"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="อีเมล"
                className="input input-bordered w-full"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="ข้อความของคุณ"
                className="textarea textarea-bordered w-full h-32"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                className="btn dark:bg-white "
                type="button"
                onClick={handleClick}
                disabled={!isFormValid}
              >
                ส่งข้อความ
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default MainContent;
