import React from "react"

const ProfileBox = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
          Data Science
        </div>
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
          Anup Patel
        </h1>
        <p className="mt-2 text-gray-500">@ Google | IISc Bangalore</p>
      </div>
    </div>
  )
}

export default ProfileBox
