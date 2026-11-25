import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bmr from '../assets/bmr.png'

export default function Bmr() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [bmrResult, setBmrResult] = useState('0.00')

  const handleCalculate = (e) => {
    e.preventDefault()
    const w = parseFloat(weight)
    const h = parseFloat(height)
    const a = parseFloat(age)

    if (!w || !h || !a || w <= 0 || h <= 0 || a <= 0) {
      alert('กรุณาป้อนน้ำหนัก ส่วนสูง และอายุให้ครบถ้วน')
      return
    }

    let result = 0
    if (gender === 'male') {
      result = 66 + (13.7 * w) + (5 * h) - (6.8 * a)
    } else {
      result = 655 + (9.6 * w) + (1.8 * h) - (4.7 * a)
    }

    setBmrResult(result.toFixed(2))
  }

  const handleReset = () => {
    setWeight('')
    setHeight('')
    setAge('')
    setGender('male')
    setBmrResult('0.00')
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 mb-10 p-8 sm:p-10 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <p className="font-kanit text-2xl font-bold">
        BMR Calculator
      </p>
      <p className="font-itim text-gray-500 text-lg">
        คำนวณ BMR
      </p>
      <img src={bmr} alt="BMR" className="w-20 mt-5" />

      {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
      <form onSubmit={handleCalculate} className="w-full mt-8 flex flex-col">
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

        <label className="font-kanit mt-3">ป้อนอายุ (ปี)</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="เช่น 25"
          className="border border-gray-300 p-2 rounded-md placeholder:font-kanit mt-1"
        />

        <label className="font-kanit mt-3">เพศ</label>
        <div className="flex gap-6 mt-1 font-kanit">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            ชาย
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            หญิง
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 mt-5 p-2 rounded-md text-white font-kanit font-bold cursor-pointer hover:bg-blue-800"
        >
          คำนวณ BMR
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
          ค่า BMR ที่คำนวณได้ :
        </p>
        <p className="font-kanit font-bold text-blue-600">
          {bmrResult}
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