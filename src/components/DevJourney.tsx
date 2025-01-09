import React, { useState } from "react";

const DevJourney = () => {
  const [activeTab, setActiveTab] = useState<"work" | "education">("work");

  const workExperience = [
    
    {
      year: "Jun 2021 - Jun 2023",
      title: "Software Engineer",
      company: "Infosys. Ltd",
      details: [
        "Developed scalable microservices and full-stack applications using Java/J2EE, Spring Boot, and frontend technologies, improving performance by 30% and reducing latency by 15%.",
        "Implemented backend solutions with Core Java, Spring MVC, Hibernate, and multithreading, enabling seamless integration and efficient data processing.",
        "Designed RESTful and SOAP services, integrating with relational and NoSQL databases, ensuring high availability and optimal data management.",
        "Achieved 90% code coverage through JUnit/Mockito testing, improved system performance by 50%, and successfully collaborated in Agile environments.",
      ],
    },
    {
      year: "Jun 2019 - Jan 2020",
      title: "Software Engineer Intern",
      company: "Philips Health Care. Ltd.",
      details: [
        "Developed web apps with Angular, TypeScript, and RxJS, improving UI performance by 25%.",
        "Integrated APIs and Reactive Forms, cutting customer response time by 15%.",
        "Enhanced error tracking, boosting data accuracy for customer insights by 30%.",
        "Conducted testing with Jasmine/Karma, achieving 98% bug-free deployments.",
      ],
    },
  ];

  const education = [
    {
      year: "Jan 2023 - Dec 2024",
      title: "Masters in Computer Science",
      company: "University of Missouri - Kansas city",
      details: [
        "GPA: 3.90/4",
        "Relevant Coursework: Advanced Operating systems, Design and Alalysis of Data Structures & Algorithms,Cloud Computing,DataBase Managment Systems. ",
        "Leadership:  Lead at Graduate Student Councile Club.",
      ],
    },
    
  ];

  const data = activeTab === "work" ? workExperience : education;

  return (
    <section id="dev-journey" className="py-16 bg-black-100 dark:bg-black-900">
      <div className="max-w-3xl mx-auto px-8 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-black-900 dark:text-white mb-8">
          My Developer Journey 🚀
        </h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("work")}
            className={`px-6 py-3 text-lg font-semibold rounded-l-lg ${
              activeTab === "work"
                ? "bg-blue-600 text-white"
                : "bg-black-300 text-black-700"
            } transition duration-300`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-3 text-lg font-semibold rounded-r-lg ${
              activeTab === "education"
                ? "bg-blue-600 text-white"
                : "bg-black-300 text-black-700"
            } transition duration-300`}
          >
            Education
          </button>
        </div>
        <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-600"></div>

            {data.map((event, index) => (
                <div key={index} className="flex items-center mb-12 relative">
                 
                   {/* Left Section: Year Text */}
                   <div className="relative flex-shrink-0 ml-1 text-lg font-medium text-black-900 dark:text-white">
                    {event.year}
                  </div>
                  {/* Bullet Symbol on Central Line */}
                  <div className="absolute w-8 h-8 bg-blue-600 rounded-full border-4 border-white flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10"></div>

                    {/* Right Section: Data Card */}
                    <div className="relative ml-60 w-35 p-6 bg-white border rounded-lg shadow-lg dark:bg-gray-900 py-12">
                    <h3 className="text-xl font-semibold text-black-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="font-medium text-black-600 dark:text-black-300 mt-2">
                      {event.company}
                    </p>
                    <ul className="mt-4 list-disc text-black-700 dark:text-black-400 space-y-2 pl-5">
                    {event.details.map((detail, idx) => (
                      <li key={idx} className="text-lg font-medium leading-6">{detail}</li>
                    ))}
                  </ul>
                  </div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default DevJourney;
