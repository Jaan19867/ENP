// src/components/UserCard.tsx
import React from "react"
import { Link } from "react-router-dom"
import {
  RiTwitterXLine,
  RiFacebookCircleFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
} from "@remixicon/react"

interface UserCardProps {
  name: string
  title: string
  linkname:string 
  description: string
  imageUrl: string
  socialLinks: {
    twitter?: string
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

const UserCard: React.FC<UserCardProps> = ({
  linkname , 
  name,
  title,
  description,
  imageUrl,
  socialLinks,
}) => {
  // Replace spaces and special characters in name for URL-friendly path
  // const mentorPath = `/mentors/${name.toLowerCase().replace(/ /g, "-")}`

  return (
    <Link
      to={`/mentor/${linkname}`}
      className="flex flex-col items-center p-0 bg-white border border-gray-200 rounded-none shadow-sm w-full max-w-[320px] mb-10 hover:bg-gray-50 hover:shadow-md transition duration-300 cursor-pointer"
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-auto object-cover mb-6 border -m-[1px]"
      />

      {/* Content */}
      <div className="text-center px-5 pb-8">
        <h4 className="text-lg font-bold text-gray-800 mb-1">{name}</h4>
        <span className="block text-lg font-bold text-gray-600 italic">
          {title}
        </span>
        <p className="mt-2 text-sm text-black italic font-bold">
          {description}
        </p>

        {/* Social Links */}
        
      </div>
    </Link>
  )
}

export default UserCard
