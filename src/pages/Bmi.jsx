import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bmi from '../assets/bmi.png'

export default function Bmi() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmiResult, setBmiResult] = useState('0.00')

  const handleCalculate = (e) => {
    e.preventDefault()
    const w = parseFloat(weight)
    const h = parseFloat(height)

    if (!w || !h || w <= 0 || h <= 0) {
      alert('กรุณาป้อนน้ำหนักและส่วนสูงให้ครบถ้วน')
      return
    }

    const heightInMeters = h / 100
    const result = w / (heightInMeters * heightInMeters)
    setBmiResult(result.toFixed(2))
  }

  const handleReset = () => {
    setWeight('')
    setHeight('')
    setBmiResult('0.00')
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 mb-10 p-8 sm:p-10 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <p className="font-kanit text-2xl font-bold">
        BMI Calculator
      </p>
      <p className="font-itim text-gray-500 text-lg">
        คำนวณ BMI
      </p>
      <img src={bmi} alt="BMI" className="w-20 mt-5" />

      {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
      <form onSubmit={handleCalculate} className="w-full mt-10 flex flex-col">
        <label className="font-kanit">ป้อนน้ำหนัก (กิโลกรัม)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="เช่น 65"
          className="border border-gray-300 p-2 rounded-md placeholder:font-kanit mt-1"
        />

        <label className="font-kanit mt-3">ป้อนส่วนสูง (เซนติเมตร)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="เช่น 170"
          className="border border-gray-300 p-2 rounded-md placeholder:font-kanit mt-1"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 mt-5 p-2 rounded-md text-white font-kanit font-bold cursor-pointer hover:bg-blue-800"
        >
          คำนวณ BMI
        </button>

        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-gray-400 mt-3 p-2 rounded-md text-black font-kanit font-bold cursor-pointer hover:bg-gray-500"
        >
          รีเซ็ต
        </button>
      </form>

      {/* ส่วนแสดงผล */}
      <div className="flex justify-center gap-3 mt-5">
        <p className="font-kanit font-bold">
          ค่า BMI ที่คำนวณได้ :
        </p>
        <p className="font-kanit font-bold text-blue-600">
          {bmiResult}
        </p>
      </div>

      {/* ส่วนลิงก์กลับไปหน้าหลัก */}
      <Link
        to="/"
        className="w-full bg-gray-400 mt-3 p-2 rounded-md text-black font-kanit font-bold text-center hover:bg-gray-500"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  )
}