import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className='text-xl mt-20'>
          I am a recently graduate with a Bachelor of Engineering in stream of Information Technology from Sipna College of Engineering and Technology Amravati. My academic performance has been strong, with an 8.93 CGPA. I have completed several courses and certifications including Java Programming, container, kubernate. I have also gained hands-on experience through internship and projects, such as GoServiceLink, a SpringBoot web application that connects consumers with service providers, and House Price Prediction, I am proficient in multiple programming languages, including Java, JavaScript and SQL, and have experience with web development, data structures, algorithms, and Software engineering. I am eager to apply my skills and knowledge in a challenging work environment to contribute to organizational growth.
          </p>
      </div>
    </div>
  )
}

export default About;
