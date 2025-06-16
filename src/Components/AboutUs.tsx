import React from 'react'

const AboutUs = () => {
   return (
    <section className="bg-white dark:bg-gray-800 dark:text-white text-gray-800 ">
      <div className='py-12 max-w-5xl mx-auto'>
      <h2 className="text-3xl font-bold text-center mb-6 text-[var(--color-primary)] dark:text-white">เกี่ยวกับเรา</h2>
      <p className="text-lg text-center mb-8">
        เราเชื่อว่าทุกคนสามารถเรียนรู้ได้ ไม่ว่าจะอยู่ที่ไหน เวลาใดก็ตาม
      </p>

      <div className="space-y-6">
        <p>
          เว็บไซต์ของเราเกิดขึ้นจากความตั้งใจที่จะทำให้การเรียนรู้เรื่องเทคโนโลยีและทักษะดิจิทัลเป็นเรื่องง่าย
          เข้าถึงได้ และไม่จำกัดเฉพาะแค่ในห้องเรียน เรารวบรวมคอร์สคุณภาพ ทั้งด้าน
          <strong> การเขียนโปรแกรม พัฒนาเว็บไซต์ การวิเคราะห์ข้อมูล </strong>
          และอีกมากมาย เพื่อให้ผู้เรียนทุกระดับสามารถเรียนรู้และพัฒนาตัวเองได้ในแบบของตัวเอง
        </p>

        <div className="bg-gray-100 p-4 rounded-xl shadow dark:bg-gray-700">
          <h3 className="text-xl font-semibold mb-2">🎯 วิสัยทัศน์ของเรา</h3>
          <p className="italic">"เปิดโอกาสให้ทุกคนเข้าถึงความรู้ เพื่อเติบโตในยุคดิจิทัล"</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">💡 สิ่งที่คุณจะได้รับจากเรา:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>📚 คอร์สเรียนที่เข้าใจง่าย เหมาะกับผู้เริ่มต้น</li>
            <li>👨‍🏫 ผู้สอนมากประสบการณ์ พร้อมแนะนำอย่างเป็นกันเอง</li>
            <li>📱 เรียนได้ทุกที่ ทุกเวลา ทั้งบนคอมพิวเตอร์และมือถือ</li>
            <li>🧑‍💻 มีชุมชนช่วยกันถาม-ตอบ และพัฒนาร่วมกัน</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};


export default AboutUs