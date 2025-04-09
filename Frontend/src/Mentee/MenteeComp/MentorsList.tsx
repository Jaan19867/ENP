import React from "react"
import { Link } from "react-router-dom"
import UserCard from "./UserCard"
import punitnandal from "../../assets/trainer-1-punit-nandal.jpg"
import meenalbeniwal from "../../assets/trainer-2-meenal-beniwal.jpg"
import uditsangwan from "../../assets/trainer-3-udit-sangal.jpg"
import sunitnandal from "../../assets/trainer-4-sunit-nandal.jpg"
import riyajain from "../../assets/trainer-5-riya-jain.jpg"
import rizabul from "../../assets/mdrizabul.jpeg"
import sambhavising from "../../assets/sambhavisingh.png"
import shubhamsingh from "../../assets/ShubhamSingh.png"

const trainers = [
  {
    name: "Md Rizabul ",
    title: " Undergrad @ DTU",
    description: "Specialist at CodeForces , Knight at LeetCode , DTU'26",
    imageUrl: rizabul,
    linkname: "mdrizabul",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/md-rizabul-074bbb256/",
    },
  },
  {
    name: "Shambhavi Singh ",
    title: "Upcoming Intern @BNY Mellon ",
    description: "Undergraduate student IGDTUW 2026'.",
    imageUrl: sambhavising,
    linkname: "shambhavisingh",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/shambhavi0709/",
    },
  },
  {
    name: "Udit Sangwan",
    title: "Software Engineer Intern/FTE",
    description: "Undergraduate student DTU Delhi(DCE)2024'.",
    imageUrl: uditsangwan,
    linkname: "uditsangwan",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/udit-sangwan-327028210/",
    },
  },
  {
    name: "Shubham Singh ",
    title: "Software Engineer",
    description:
      "Software Developer at Dardoc and Blockchain Developer at Blazeswap",
    imageUrl: shubhamsingh,
    linkname: "shubham singh ",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/shubham-singh-36204b238/",
    },
  },

 
]

function MentorsList() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <section
          id="trainers"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <Link
                to={`/mentor/${trainer.linkname}`}
                key={index}
                className="block w-full"
              >
                <div className="h-full">
                  <UserCard
                    linkname={trainer.linkname}
                    name={trainer.name}
                    title={trainer.title}
                    description={trainer.description}
                    imageUrl={trainer.imageUrl}
                    socialLinks={trainer.socialLinks}
                    className="h-full"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default MentorsList
