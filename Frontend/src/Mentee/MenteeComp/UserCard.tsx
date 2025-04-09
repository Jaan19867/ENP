import React from "react"
import { Link } from "react-router-dom"


interface UserCardProps {
  name: string
  title: string
  linkname: string
  description: string
  imageUrl: string
  socialLinks: {
    twitter?: string
    facebook?: string
    instagram?: string
    linkedin?: string
  }
  className?: string // Add this line to accept className
}

const UserCard: React.FC<UserCardProps> = ({
  linkname,
  name,
  title,
  description,
  imageUrl,
  socialLinks,
}) => {
  return (
    <Link
      to={`/mentor/${linkname}`}
      className="flex flex-col items-center p-0 bg-white border border-gray-200 rounded-none shadow-sm w-full h-[450px] max-w-[320px] mb-10 hover:bg-gray-50 hover:shadow-md transition duration-300 cursor-pointer" // Fixed height for card
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[250px] object-cover mb-6 border -m-[1px]" // Fixed height for image
      />

      {/* Content */}
      <div className="text-center px-5 pb-8 flex flex-col justify-between h-[180px]">
        {" "}
        {/* Fixed height for content */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-1">{name}</h4>
          <span className="block text-lg font-bold text-gray-600 italic">
            {title}
          </span>
          <p className="mt-2 text-sm text-black italic font-bold line-clamp-3">
            {description}
          </p>
        </div>
        {/* Social Links (optional, uncomment if needed) */}
        {/* <div className="flex justify-center gap-3 mt-4">
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxFill className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            </a>
          )}
          {socialLinks.twitter && (
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <RiTwitterXLine className="w-6 h-6 text-gray-600 hover:text-blue-400" />
            </a>
          )}
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <RiFacebookCircleFill className="w-6 h-6 text-gray-600 hover:text-blue-800" />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <RiInstagramLine className="w-6 h-6 text-gray-600 hover:text-pink-600" />
            </a>
          )}
        </div> */}
      </div>
    </Link>
  )
}

export default UserCard
