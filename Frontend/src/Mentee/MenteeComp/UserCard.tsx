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
  name,
  title,
  description,
  imageUrl,
  socialLinks,
}) => {
  // Replace spaces and special characters in name for URL-friendly path
  const mentorPath = `/mentors/${name.toLowerCase().replace(/ /g, "-")}`

  return (
    <Link
      to={mentorPath}
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
        <div className="flex justify-center mt-4 space-x-2">
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              className="text-gray-500 hover:text-green-500"
            >
              <RiTwitterXLine className="w-7 h-7" />
            </a>
          )}
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              className="text-gray-500 hover:text-green-500"
            >
              <RiFacebookCircleFill className="w-7 h-7" />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              className="text-gray-500 hover:text-green-500"
            >
              <RiInstagramLine className="w-7 h-7" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              className="text-gray-500 hover:text-green-500"
            >
              <RiLinkedinBoxFill className="w-7 h-7" />
            </a>
          )}
        </div>
      </div>
    </Link>
  )
}

export default UserCard
