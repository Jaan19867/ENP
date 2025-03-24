import React from "react"
import picture from "@/assets/7UWZmWQUmBSRJvf3M9AuuK.avif"
import PriceCard from "@/CardContainer/PriceCard"
import TestimonialsSection from "@/components/ui/shared/Testimonials"
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

function MdRizabul() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Section: Mentor Profile */}
      <div className="lg:w-[30%] w-full bg-white shadow-lg p-6 flex flex-col items-center lg:sticky lg:top-0 lg:h-screen border-r border-gray-200">
        {/* Mentor Image */}
        <div className="image-section mb-6">
          <img
            src={picture}
            alt="Deepanshu Kalra"
            className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-md"
          />
        </div>

        {/* Mentor Name */}
        <div className="text-2xl font-bold text-gray-800 mb-2">
          Deepanshu Kalra
        </div>

        {/* Mentor Description */}
        <div className="text-gray-600 text-center text-sm leading-relaxed mb-4">
          Data Engineer at Google, Ex-Microsoft, 50,000 followers on LinkedIn, A
          decade of industry experience, Being who I needed when I was younger
        </div>
      </div>

      {/* Right Section: Price Cards, Testimonials, and About */}
      <div className="lg:w-[70%] w-full p-8 flex flex-col gap-8">
        <div className="text-2xl">

        Book Session with Deepanshu Kalra 
        </div>
        {/* Price Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PriceCard />
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What Mentees Say
          </h2>
          <TestimonialsSection />
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>

          {/* Social Links */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-500 transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* About Description */}
          <div className="text-gray-600 text-sm leading-relaxed text-xl" >
            Deepanshu is a data engineer with great technical skills and a
            passion for resolving complex problems with ease. He has expertise
            in the FAAMG interview process, HR negotiations, mock interviews,
            and everything about the data space in tech companies. Adept at
            maintaining focus on achieving the right end results while
            formulating and implementing advanced technology and business
            solutions, especially in customer analytics and growth analytics
            areas. He is currently delivering value to customers as a Data
            Engineer at Google with his data strategy, vision, and
            implementation. In the past, he worked with Microsoft and touched
            billions of users with his data solutions.
          </div>
        </div>
      </div>
    </div>
  )
}

export default MdRizabul
