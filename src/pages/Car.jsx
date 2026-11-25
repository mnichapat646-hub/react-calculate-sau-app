import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import car from '../assets/car.png'

export default function Car() {
  const [name, setName] = useState('')
  const [carPrice, setCarPrice] = useState('')
  const [interestRate, setInterestRate] = useState('')
  const [downPayment, setDownPayment] = useState('15')
  const [months, setMonths] = useState('24')
  const [monthlyPayment, setMonthlyPayment] = useState('0.00')

  const handleCalculate = (e) => {
    e.preventDefault()
    const price = parseFloat(carPrice)
    const rate = parseFloat(interestRate)
    const down = parseFloat(downPayment)
    const totalMonths = parseInt(months, 10)

    if (!price || price <= 0 || isNaN(rate) || rate < 0) {
      alert('กรุณาป้อนราคารถและดอกเบี้ยต่อปีให้ถูกต้อง')
      return
    }

    const downAmount = price * (down / 100)
    const financeAmount = price - downAmount
    const totalInterest = financeAmount * (rate / 100) * (totalMonths / 12)
    const totalAmount = financeAmount + totalInterest
    const perMonth = totalAmount / totalMonths

    setMonthlyPayment(
      perMonth.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    )
  }

  const handleReset = () => {
    setName('')
    setCarPrice('')
    setInterestRate('')
    setDownPayment('15')
    setMonths('24')
    setMonthlyPayment('0.00')
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 mb-10 p-8 sm:p-10 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <p className="font-kanit text-2xl font-bold">
        Car Installment Calculator
      </p>
      <p className="font-itim text-gray-500 text-lg">
        คำนวณ Car Installment
      </p>
      <img src={car} alt="Car" className="w-28 mt-5" />

      {/* ส่วนของฟอร์ม */}
      <form onSubmit={handleCalculate} className="w-full mt-8 flex flex-col">
        <label className="font-kanit">ชื่อผู้คำนวณ</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md font-kanit mt-1"
        />

        <label className="font-kanit mt-3">ราคารถ (บาท)</label>
        <input
          type="number"
          value={carPrice}
          onChange={(e) => setCarPrice(e.target.value)}
          className="border border-gray-300 p-2 rounded-md font-kanit mt-1"
        />

        <label className="font-kanit mt-3">ดอกเบี้ยต่อปี (%)</label>
        <input
          type="number"
          step="any"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="border border-gray-300 p-2 rounded-md font-kanit mt-1"
        />

        <label className="font-kanit mt-3">เงินดาวน์ (%)</label>
        <div className="flex flex-wrap gap-4 mt-2 font-kanit">
          {['15', '20', '25', '30', '35'].map((percent) => (
            <label key={percent} className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="radio"
                name="downPayment"
                value={percent}
                checked={downPayment === percent}
                onChange={(e) => setDownPayment(e.target.value)}
              />
              {percent}%
            </label>
          ))}
        </div>

        <label className="font-kanit mt-3">จำนวนเดือนที่ผ่อน</label>
        <select
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="border border-gray-300 p-2 rounded-md font-kanit mt-1 bg-white"
        >
          <option value="24">24 เดือน</option>
          <option value="36">36 เดือน</option>
          <option value="48">48 เดือน</option>
          <option value="60">60 เดือน</option>
          <option value="72">72 เดือน</option>
          <option value="84">84 เดือน</option>
        </select>

        <div className="flex gap-3 mt-5">
          <button
            type="submit"
            className="w-full bg-blue-600 p-2 rounded-md text-white font-kanit font-bold cursor-pointer hover:bg-blue-800"
          >
            คำนวณ
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="w-full bg-gray-300 p-2 rounded-md text-black font-kanit font-bold cursor-pointer hover:bg-gray-400"
          >
            ล้างข้อมูล
          </button>
        </div>
      </form>

      {/* ส่วนแสดงผล */}
      <div className="mt-5 text-center font-kanit font-bold">
        <p>ผ่อนชำระต่อเดือน: {monthlyPayment} บาท</p>
      </div>

      {/* ส่วนลิงก์กลับไปหน้าหลัก */}
      <Link
        to="/"
        className="w-full bg-gray-300 mt-4 p-2 rounded-md text-black font-kanit font-bold text-center hover:bg-gray-400"
      >
        กลับหน้าหลัก
      </Link>
    </div>
  )
}