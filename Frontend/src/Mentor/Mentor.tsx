
import MentorHeader from "./MentorComponent/Header"
import Accordians from "./MentorComponent/Accordian"
import Footer from "@/CommonComp/Footer"
import imagea from "../../src/assets/oneforone.png"

function Mentor() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <MentorHeader />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-200 to-gray-300 py-20 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black leading-tight">
              Be Instantly Accessible
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-800">
              Manage and monetize every interaction, from hosting 1:1
              conversations and webinars to answering questions, selling digital
              products, and much more.
            </p>
            <button
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
              onClick={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSe7hpiStLR9juPj9ymuad7x_9MreY6zYxxdrj_XUGpK7YsooA/viewform?usp=sharing",
                  "_blank"
                )
              }}
            >
              Start My Page
            </button>
          </div>
        </section>

        {/* Image and Accordians Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left Side: Image */}
              <div className="lg:w-[40%] w-full">
                <div className="bg-gray-200 h-96 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={imagea}
                    alt="Mentor activity"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Side: Accordians */}
              <div className="lg:w-[60%] w-full">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">
                  What You Can Do
                </h2>
                <Accordians />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
              What Mentors Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4">
                  "bharat Saarthi has transformed how I connect with my
                  audience. The 1:1 sessions are seamless, and I love the
                  flexibility to offer webinars and digital products!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Shubham Singh{" "}
                    </p>
                    <p className="text-gray-600 text-sm">Software Engineer </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4">
                  "I was able to set up priority DMs in seconds, and my clients
                  love the personalized experience. Highly recommend!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-900 font-semibold">
                      Shambhavi Singh{" "}
                    </p>
                    <p className="text-gray-600 text-sm">
                      Upcoming SDE Intern at BNY Melon
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              {/* <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4">
                  "The platform’s commission model is fair, and I’ve been able
                  to grow my income by bundling services and selling courses."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-gray-900 font-semibold">Emily K.</p>
                    <p className="text-gray-600 text-sm">Digital Marketer</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Last Component: Call to Action */}
        <section className="py-16 bg-gray-200 text-black  text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 *:text-black">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Join thousands of mentors and start sharing your expertise today.
            </p>
            <button
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300   "
              onClick={() => {
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSe7hpiStLR9juPj9ymuad7x_9MreY6zYxxdrj_XUGpK7YsooA/viewform?usp=sharing",
                  "_blank"
                )
              }}
            >
              Start My Page
            </button>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-10">
        <Footer />
      </footer>
    </div>
  )
}

export default Mentor
