import React from "react";
import { Briefcase, Code, Rocket, Linkedin } from "lucide-react";

export default function QAProfileWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-200 via-pink-200 to-yellow-200 p-8 font-sans text-gray-900">
      <header className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wide drop-shadow-md">
          Lokesh Sadagopan
        </h1>
        <p className="text-xl text-gray-700 italic">
          QA Lead | Automation | Building Teams | AI Testing
        </p>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Professional Summary */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-indigo-700 flex items-center gap-3 mb-6">
            <Briefcase className="text-indigo-600 w-8 h-8" />
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            With close to 9 years of experience, I currently serve as a QA Lead. I have worked extensively with Java (Selenium) for frontend automation and Python (Pytest) for API automation. I’m also familiar with Cucumber and have a strong grasp of test strategy, automation frameworks, and CI/CD tools like Jenkins.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-green-700 flex items-center gap-3 mb-6">
            <Code className="text-green-600 w-8 h-8" />
            Tech Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
            <li>Java with Selenium (Frontend Automation)</li>
            <li>Python with Pytest (API Automation)</li>
            <li>Cucumber for BDD</li>
            <li>Jenkins for CI/CD</li>
            <li>GitHub for code versioning and workflows</li>
            <li>TestNG for Java test orchestration</li>
          </ul>
        </div>

        {/* Leadership & Impact */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-semibold text-red-700 flex items-center gap-3 mb-6">
            <Rocket className="text-red-600 w-8 h-8" />
            Leadership & Impact
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Led teams including peers with similar or greater experience, handled midnight regression runs, mentored juniors, and streamlined automation processes for banking applications across multiple modules like Business, Cards, and Issuer Configurations.
          </p>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-blue-700 flex items-center gap-3 mb-6">
              <Linkedin className="text-blue-600 w-8 h-8" />
              Social Media
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              I enjoy connecting with professionals, sharing knowledge, and staying up to date with the latest in test automation, team leadership, and innovation through platforms like LinkedIn.
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/lokesh-sadagopan-b66233126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-6 py-3 shadow-lg transition-colors"
          >
            Visit LinkedIn
          </a>
        </div>
      </section>

      <footer className="mt-20 text-center text-gray-600 font-light">
        <p>&copy; {new Date().getFullYear()} Lokesh Sadagopan — QA and Automation</p>
      </footer>
    </div>
  );
}
