
import MentorHeader from "./MentorComponent/Header"
import PriceAccordians from "./MentorComponent/PriceAccordians"
import Footer from "@/CommonComp/Footer"

function MentorPricing() {
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
              We Earn Only When You Earn
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-6">
              We charge a small commission on your earnings. No CC required. No
              upfront fees. No recurring charges.
            </p>
          </div>
        </section>

        {/* Commission Info Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-md p-8 max-w-lg mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Commission
              </h2>
              <p className="text-4xl font-bold text-indigo-600 mb-2">5%</p>
              <p className="text-gray-600">
                We take a 5% commission on your earnings. That’s it! No hidden
                fees, no surprises.
              </p>
            </div>
          </div>
        </section>

        {/* Price Accordians Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              What You Can Offer as a Mentor
            </h2>
            <div className="max-w-md mx-auto">
              <PriceAccordians />
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Ready to Share Your Expertise?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join our platform and start mentoring today. It’s free to get
              started!
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Apply to Become a Mentor
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

export default MentorPricing
