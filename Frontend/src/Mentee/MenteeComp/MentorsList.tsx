import React from "react"
import { Link } from "react-router-dom"
import UserCard from "./UserCard"
import punitnandal from "../../assets/trainer-1-punit-nandal.jpg"
import meenalbeniwal from "../../assets/trainer-2-meenal-beniwal.jpg"
import uditsangwan from "../../assets/trainer-3-udit-sangal.jpg"
import sunitnandal from "../../assets/trainer-4-sunit-nandal.jpg"
import riyajain from "../../assets/trainer-5-riya-jain.jpg"

import ProfileBox from "@/CommonComp/Profilebox"

const trainers = [
  {
    name: "Punit Nandal",
    title: "Software Engineer",
    description: "Graduated from NSUT Delhi(NSIT)2023'.",
    imageUrl: punitnandal,
    linkname: "mdrizabul",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/punit-nandal-64a8b818b/",
    },
  },
  {
    name: "Md Rizabul ",
    title: "Upcoming Intern @Google",
    description: "Undergraduate student NSUT Delhi(NSIT)2025'.",
    imageUrl: meenalbeniwal,
    linkname: "mdrizabul",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/meenal-beniwal-a6719022a/",
    },
  },
  {
    name: "Udit Sangwan",
    title: "Software Engineer Intern/FTE",
    description: "Undergraduate student DTU Delhi(DCE)2024'.",
    imageUrl: uditsangwan,
    linkname: "mdrizabul",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/udit-sangwan-327028210/",
    },
  },
  {
    name: "Sunit Nandal",
    title: "Software Engineer",
    description: "Graduated from IIT Roorkee 2023'.",
    imageUrl: sunitnandal,
    linkname: "mdrizabul",
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/sunit-nandal-698842198/",
    },
  },
  {
    name: "Riya Jain",
    title: "Web Developer",
    description: "Undergraduate student IGDTUW Delhi 2025'.",
    linkname: "mdrizabul",
    imageUrl: riyajain,
    socialLinks: {
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/riya-jain-b41267258/",
    },
  },
]

function MentorsList() {
  return (
    <div className="flex flex-col min-h-screen">
      hi
   
      <main className="flex-grow">
        <section id="trainers" className="w-[90%] md:w-[70%] mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {trainers.map((trainer, index) => (
              <Link
                to={`/mentor/${trainer.linkname}`}
                key={index}
                className="block w-full"
              
              >
                <UserCard
                  linkname={trainer.linkname}
                  name={trainer.name}
                  title={trainer.title}
                  description={trainer.description}
                  imageUrl={trainer.imageUrl}
                  socialLinks={trainer.socialLinks}
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

     

   
    </div>
  )
}

export default MentorsList
