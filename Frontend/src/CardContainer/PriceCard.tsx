import React from "react"
import { useNavigate } from "react-router-dom" // For navigation
import { AiTwotoneSchedule } from "react-icons/ai"

interface PriceCardProps{
  sessionType:string 
  price : string 
  mint: string 
}

function PriceCard({ sessionType , price , mint} :PriceCardProps ) {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/payment/${sessionType}/${price.replace("₹", "")}`) // Remove ₹ for URL
  }

  return (
    <div
      onClick={handleCardClick}
      className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm p-6 w-full max-w-sm transition-all duration-300 hover:shadow-md cursor-pointer"
    >
      {/* Title Section */}
      <div className="text-lg font-semibold text-gray-800 mb-4">
        {sessionType}
      </div>

      {/* Details and Price Section */}
      <div className="flex items-center justify-between">
        {/* Duration Section */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-gray-700">
          <AiTwotoneSchedule className="text-green-600" size={20} />
          <span className="text-sm font-medium">{mint} mins Video Meeting</span>
        </div>

        {/* Price and Button Section */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-800">{price}</span>
          <button className="bg-gray-200 text-gray-700 rounded-full p-2 hover:bg-gray-300 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
