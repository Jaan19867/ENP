import React from "react"
import { Button } from "@/components/ui/button"
import { CircleChevronRight } from "lucide-react"


function FHero() {
  return (
    <div className="bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-2 pt-5">
        <div className="first text-3xl text-black">Master Success Faster!</div>

        <div className="second text-2xl text-black">
          Skip the trial and error—learn directly from those who've already won.
        </div>

        <div className="second text-2xl text-black">
          Tech, Careers, Finance, and more!
        </div>
        <div className="flex flex-col items-center justify-center mt-5 mb-5 gap-5">
          <div className="flex flex-row  gap-5">
            <div>
              <Button>
                <CircleChevronRight />
                Search by Category
              </Button>
            </div>
            <div>
              <Button>
                <CircleChevronRight />
                Search by Rating
              </Button>
            </div>
          </div>

          <div>
            <Button>
              <CircleChevronRight />
              Search by Experience
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FHero
