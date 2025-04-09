

function BelowMentorList() {
  return (
    <div className="bg-gray-100 mt-8 mb-8 flex flex-col items-center justify-center py-12 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Have a question or concern? Fill out the form below, and we’ll get back
        to you soon!
      </p>

      {/* Form Container */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            />
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Concern
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Express your concern here"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-y"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BelowMentorList
