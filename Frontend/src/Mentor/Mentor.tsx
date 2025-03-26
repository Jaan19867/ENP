import React from "react"
import MentorHeader from "./MentorComponent/Header"
import Accordians from "./MentorComponent/Accordian"
import Footer from "@/CommonComp/Footer"

function Mentor() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <MentorHeader />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Be Instantly Accessible
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
              Manage and monetize every interaction, from hosting 1:1
              conversations and webinars to answering questions, selling digital
              products, and much more.
            </p>
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Start My Page
            </button>
          </div>
        </section>

        {/* Image and Accordians Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Side: Image */}
              <div className="lg:w-[40%] w-full">
                <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
                  <p className="text-gray-600 text-center">
                    Placeholder for Left Side Image
                  </p>
                </div>
              </div>

              {/* Right Side: Accordians */}
              <div className="lg:w-[60%] w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  What You Can Do
                </h2>
                <Accordians />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              What Mentors Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-600 mb-4">
                  "Topmate has transformed how I connect with my audience. The
                  1:1 sessions are seamless, and I love the flexibility to offer
                  webinars and digital products!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-800 font-semibold">Sarah J.</p>
                    <p className="text-gray-500 text-sm">Career Coach</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-600 mb-4">
                  "I was able to set up priority DMs in seconds, and my clients
                  love the personalized experience. Highly recommend!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-800 font-semibold">Michael R.</p>
                    <p className="text-gray-500 text-sm">Tech Consultant</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-600 mb-4">
                  "The platform’s commission model is fair, and I’ve been able
                  to grow my income by bundling services and selling courses."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-800 font-semibold">Emily K.</p>
                    <p className="text-gray-500 text-sm">Digital Marketer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Last Component: Call to Action */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of mentors and start sharing your expertise today.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Start My Page
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <Footer />
      </footer>
    </div>
  )
}

export default Mentor
