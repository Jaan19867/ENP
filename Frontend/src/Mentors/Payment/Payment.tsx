import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import qrCode from "@/assets/upipic.jpeg"

function PaymentPage() {
  const { sessionType, price } = useParams() // Get sessionType and price from URL
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files[0]
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile)
      setError("")
    } else {
      setError("Please upload a valid image file (e.g., PNG, JPEG).")
      setFile(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) {
      setError("Please upload a payment screenshot.")
      return
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate 2-second delay
      setIsSubmitted(true)

      setTimeout(() => {
        alert(
          "Payment confirmed! You will be notified of your session time soon."
        )
        navigate("/") // Redirect back to the mentor page
      }, 1000)
    } catch (err) {
      setError(
        "An error occurred while processing your payment. Please try again."
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Payment for {sessionType}
        </h2>

        {/* Session Details */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-medium">Session:</span> {sessionType}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Amount:</span> ₹{price}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Duration:</span> 45 mins Video Meeting
          </p>
        </div>

        {/* QR Code */}
        <div className="mb-6 flex justify-center">
          <img
            src={qrCode}
            alt="UPI QR Code"
            className="w-48 h-48 object-contain"
          />
        </div>
        <p className="text-gray-600 text-center mb-6">
          Scan the QR code above using any UPI app to make the payment.
        </p>

        {/* File Upload */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Upload Payment Screenshot
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {file && (
                <p className="text-gray-600 mt-2">Selected file: {file.name}</p>
              )}
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
            >
              Confirm Payment
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-medium">
              Payment submitted successfully! Redirecting...
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PaymentPage
