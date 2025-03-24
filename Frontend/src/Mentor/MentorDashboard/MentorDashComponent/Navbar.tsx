import React from "react"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <div>
        <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
          {/* Mobile View: Menu Icon + Name */}
          <div className="flex items-center lg:hidden space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="left" className="w-64">
                <div className="p-4">
                  <div className="text-2xl font-bold mb-6">Priya Singh</div>
                  <div className="grid gap-4">
                    <Link
                      to="/expertdashboard/session"
                      className="text-lg font-medium hover:text-blue-600"
                    >
                      Session
                    </Link>
                    <Link
                      to="/mentor/pricing"
                      className="text-lg font-medium hover:text-blue-600"
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Display Professor's Name */}
          </div>

          {/* Desktop View: Logo */}
       

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/expertdashboard/session"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Session Taken
            </Link>

            <Link
              to="/expertdashboard/profile"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
