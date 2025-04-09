import React from "react"
import rizabul from "@/assets/mdrizabul.jpeg"
import PriceCard from "@/CardContainer/PriceCard"
import TestimonialsSection from "@/components/ui/shared/Testimonials"
import RizTestim from "./MdRizabulTestim"
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

function MdRizabul() {
  const sessions = [
    { sessionType: "DSA Guidance ", price: "₹40", mint: "20" },
    { sessionType: "DSA Guidance ", price: "₹80", mint: "40" },
    {
      sessionType: "Competitive Programming  Guidance",
      price: "₹50",
      mint: "20",
    },
    {
      sessionType: "Competitive Programming  Guidance",
      price: "₹90",
      mint: "20",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Left Section: Mentor Profile */}
      <div className="lg:w-[30%] w-full bg-white shadow-lg p-6 flex flex-col items-center lg:sticky lg:top-0 lg:h-screen border-r border-gray-200">
        {/* Mentor Image */}
        <div className="image-section mb-6">
          <img
            src={rizabul}
            alt="Md Rizabul"
            className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-md"
          />
        </div>

        {/* Mentor Name */}
        <div className="text-2xl font-bold text-gray-800 mb-2">Md Rizabul</div>

        {/* Mentor Description */}
        <div className="text-gray-600 text-center text-sm leading-relaxed mb-4">
          Full Stack Developer | Specialist @ Codeforces | Knight @ LeetCode |
          Full Stack Developer
        </div>
      </div>

      {/* Right Section: Price Cards, Testimonials, and About */}
      <div className="lg:w-[70%] w-full p-8 flex flex-col gap-8">
        <div className="text-2xl font-semibold text-gray-800">
          Book a Session with Md Rizabul
        </div>

        {/* Price Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session, index) => (
            <PriceCard
              key={index}
              sessionType={session.sessionType}
              mint={session.mint}
              price={session.price}
            />
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            What Mentees Say
          </h2>
          <RizTestim/>
        </div>

        {/* About Me Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>

          {/* Social Links */}
          <div className="flex gap-4 mb-4">
            <a
              href="https://www.linkedin.com/in/md-rizabul-074bbb256/"
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
          <div className="text-gray-600 text-sm leading-relaxed">
            I'm Md Rizabul, a Full Stack Developer and an avid competitive
            programmer. I’ve built scalable platforms such as AniCare (India’s
            first tech-integrated pet care platform)  I specialize in
            React, Next.js, PostgreSQL, and Docker, and I’ve solved over 1000+
            DSA problems. Ranked Specialist at Codeforces (max rating 1454) and
            Knight at Leetcode (max rating 1926), I’m passionate about guiding
            students through DSA, full-stack projects, and interview prep with
            real-world insights.
          </div>
        </div>
      </div>
    </div>
  )
}

export default MdRizabul
