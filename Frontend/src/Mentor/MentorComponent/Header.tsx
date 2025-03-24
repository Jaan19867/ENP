import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Search } from "lucide-react" // Icon for search
import { Input } from "@/components/ui/input" // shadcn Input component
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"

function MentorHeader() {
    const navigate=useNavigate(); 
 
  return (
    <div>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left Section: Logo and Bharat Saarthi */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-800">
            Bharat Saarthi
          </div>

          {/* Center Section: Search Bar */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md"></div>
          </div>

          {/* Right Section: Navigation Links and User Avatar */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => navigate("/")}
            >
              For Mentee
            </Button>
            <Button
              onClick={() => navigate("/mentor/pricing")}
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Pricing
            </Button>
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              Blog
            </Button>
            {/* User Profile Avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              <Link
                to={"/expertdashboard"}
                className="text-gray-600 font-medium"
              >
                U
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default MentorHeader
