import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { NavLink } from "react-router-dom"
import {
  RiArrowRightSLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiFacebookCircleFill,
  RiArrowUpLine,
} from "@remixicon/react"

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const emailInput = form.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement
    const emailValue = emailInput.value
    setEmail(emailValue)

    try {
      const response = await axios.post(
        "https://saathi-xttb.onrender.com/api/userpost",
        { email: emailValue }
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }

    toast("Thanks for subscribing to our newsletter")
  }

  return (
    <div className="flex flex-col w-full font-sans text-xl overflow-x-hidden">
      {/* Upper Footer */}
      <div className="flex flex-col md:flex-row justify-center gap-5 bg-gray-50 py-16 px-4 md:px-0">
        <div className="mb-8 md:mb-0 md:mr-10">
          <h3 className="text-2xl uppercase font-light">SAATHI</h3>
          <p className="text-gray-700">
            <strong>Email:</strong> punitnandal0001@gmail.com
          </p>
        </div>

        <div className="mb-8 md:mb-0 md:mr-10">
          <h4 className="text-xl font-medium">Useful Links</h4>
          <ul className="space-y-2">
            {[
              "Home",
              "About us",
              "Services",
              "Terms of service",
              "Privacy policy",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <RiArrowRightSLine className="text-green-500 mr-2" />
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 md:mb-0 md:mr-10">
          <h4 className="text-xl font-medium">Our Services</h4>
          <ul className="space-y-2">
            {[
              "Web Design",
              "Web Development",
              "Product Management",
              "Internships",
              "Graphic Design",
            ].map((item) => (
              <li key={item} className="flex items-center">
                <RiArrowRightSLine className="text-green-500 mr-2" />
                <a href="#" className="text-gray-600 hover:text-green-500">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8 md:mb-0">
          <h4 className="text-xl font-medium">Join Our Newsletter</h4>
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Your email"
              className="text-lg h-9 px-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="h-9 px-4 bg-green-500 text-white rounded-r-full border border-green-500 hover:bg-green-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Lower Footer */}
      <div className="bg-gray-100 py-5 px-4 md:px-24 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-700 mb-4 md:mb-0">
          © Copyright <span className="font-semibold">Saathi</span> All Rights
          Reserved
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
              <RiTwitterXLine />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
              <RiInstagramLine />
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
              <RiFacebookCircleFill />
            </div>
          </div>
          <a
            href="#"
            className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full"
          >
            <RiArrowUpLine />
          </a>
        </div>
      </div>

      <ToastContainer className="mt-4" autoClose={2000} />
    </div>
  )
}

export default Footer
