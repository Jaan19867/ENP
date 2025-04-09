
import Header from "@/Mentee/MenteeComp/Header"
import Footer from "@/CommonComp/Footer"
import MentorsList from "./MenteeComp/MentorsList"
import FHero from "./MenteeComp/FHero"
import BelowHer from "./MenteeComp/BelowHer"
import BelowMentorList from "./MenteeComp/BelowMentorList"

function Mentis() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r bg-gray-200  text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FHero />
          </div>
        </section>

        {/* Below Hero Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BelowHer />
          </div>
        </section>

        {/* Mentors List Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Meet Our Mentors
            </h2>
            <MentorsList />
          </div>
        </section>

        {/* Below Mentors List Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BelowMentorList />
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

export default Mentis
