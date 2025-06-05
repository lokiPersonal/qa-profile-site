import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Briefcase, Youtube, Code, Rocket } from "lucide-react";

export default function QAProfileWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Loki S</h1>
        <p className="text-xl text-gray-600">QA Lead | Automation Expert | Horror Storyteller</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-blue-500" />
              <h2 className="text-2xl font-semibold">Professional Summary</h2>
            </div>
            <p>
              With close to 9 years of experience, I currently serve as a QA Lead. I have worked extensively with Java (Selenium) for frontend automation and Python (Pytest) for API automation. I’m also familiar with Cucumber and have a strong grasp of test strategy, automation frameworks, and CI/CD tools like Jenkins.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Code className="text-green-500" />
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
            </div>
            <ul className="list-disc pl-6">
              <li>Java with Selenium (Frontend Automation)</li>
              <li>Python with Pytest (API Automation)</li>
              <li>Cucumber for BDD</li>
              <li>Jenkins for CI/CD</li>
              <li>GitHub for code versioning and workflows</li>
              <li>TestNG for Java test orchestration</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="text-red-500" />
              <h2 className="text-2xl font-semibold">Leadership & Impact</h2>
            </div>
            <p>
              Led teams including peers with similar or greater experience, handled midnight regression runs, mentored juniors, and streamlined automation processes for banking applications across multiple modules like Business, Cards, and Issuer Configurations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Youtube className="text-yellow-500" />
              <h2 className="text-2xl font-semibold">YouTube & Creative Side</h2>
            </div>
            <p>
              Outside the tech world, I run a horror-themed YouTube channel where I craft and narrate eerie, spine-chilling tales that blend traditional fear with modern twists.
            </p>
            <Button className="mt-4" variant="outline">
              Visit Channel
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Loki S — QA Lead & Storyteller</p>
      </footer>
    </div>
  );
}
