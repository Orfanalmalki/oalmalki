import React from "react";
import {
  User,
  Briefcase,
  Code,
  GraduationCap,
  Globe,
  Monitor,
  Server,
  Database,
  Cloud,
  TestTube,
  GitBranch,
  Users,
} from "lucide-react";

const Experience = () => {
  const skillCategories = [
    {
      title: "Languages & Markup",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS", "SASS"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-300",
      icon: Code,
    },
    {
      title: "Frontend Frameworks & UI",
      skills: ["React", "Next.js", "Tailwind CSS", "Material UI"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-400/30",
      textColor: "text-green-300",
      icon: Monitor,
    },
    {
      title: "Backend & API",
      skills: ["Node.js", "NestJS", "GraphQL", "REST API"],
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-300",
      icon: Server,
    },
    {
      title: "Databases & ORMs",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "CosmosDB"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-400/30",
      textColor: "text-orange-300",
      icon: Database,
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Azure Functions"],
      color: "from-teal-500/20 to-cyan-500/20",
      borderColor: "border-teal-400/30",
      textColor: "text-teal-300",
      icon: Cloud,
    },
    {
      title: "API Testing",
      skills: ["Postman", "Thunder Client"],
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-400/30",
      textColor: "text-pink-300",
      icon: TestTube,
    },
    {
      title: "Version Control & Collaboration",
      skills: ["GitHub", "GitLab", "Bitbucket", "Confluence"],
      color: "from-indigo-500/20 to-blue-500/20",
      borderColor: "border-indigo-400/30",
      textColor: "text-indigo-300",
      icon: GitBranch,
    },
    {
      title: "Methodologies & Practices",
      skills: ["Scrum", "Agile"],
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-400/30",
      textColor: "text-amber-300",
      icon: Users,
    },
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Accenture",
      period: "Oct 2021 - Present",
      description: [
        "Developed custom web applications for clients in the banking and healthcare industries, delivering solutions that meet their unique requirements.",
        "Built scalable, high-performance applications using modern technologies such as React, Next.js, Node.js, and NestJS.",
        "Worked with cloud platforms like AWS and Azure to ensure scalability, performance, and reliability.",
        "API development and managed databases, including designing, modifying, and optimizing SQL (PostgreSQL, Prisma) and NoSQL (MongoDB) databases.",
      ],
    },
    {
      role: "Jr. Full Stack Developer (Intern)",
      company: "Media58",
      period: "Aug 2020 - Jan 2021, Aug 2019 - Nov 2019",
      description: [
        "Managed websites including updates and bug fixes.",
        "Focused on frontend development, adding new features and improving user interfaces.",
      ],
    },
  ];

  const education = [
    {
      degree: "Application Development",
      institution: "Scalda College",
      period: "2018 - 2021",
      description:
        "Specialized in software development with a strong focus on solving real-world problems and building scalable, user-friendly applications.",
    },
    {
      degree: "ICT Support",
      institution: "Scalda College",
      period: "2017 - 2018",
      description:
        "Gained foundational knowledge in IT infrastructure, troubleshooting, and providing technical support for hardware and software systems.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in">
          Experience
        </h2>

        {/* Experience & Education Wrapper */}
        <div className="lg:flex lg:gap-8 mb-12">
          {/* Experience Section */}
          <div className="mb-12 lg:mb-0 lg:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-lime-500/20 rounded-2xl">
                <Briefcase className="text-lime-400" size={28} />
              </div>
              <h3 className="text-3xl font-semibold text-white">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-lime-400/30 pl-6 relative "
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-lime-400 rounded-full "></div>
                  <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h4>
                    <p className="text-lime-400 font-medium">{exp.company}</p>
                    <p className="text-white/60 text-sm mb-2">{exp.period}</p>
                    {/* <p className="text-white/80">{exp.description}</p> */}
                    <ul className="list-disc list-outside pl-5 space-y-1 text-white/80 marker:text-lime-400">
                      {exp.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="lg:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-orange-500/20 rounded-2xl">
                <GraduationCap className="text-orange-400" size={28} />
              </div>
              <h3 className="text-3xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-orange-400/30 pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-400 rounded-full"></div>
                  <div className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-orange-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-white/60 text-sm mb-2">{edu.period}</p>
                    <p className="text-white/80">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-500/20 rounded-2xl">
              <Code className="text-red-400" size={28} />
            </div>
            <h3 className="text-3xl font-semibold text-white">Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-3">
                    <div
                      className={`p-2 bg-gradient-to-r ${category.color} rounded-xl`}
                    >
                      <IconComponent className={category.textColor} size={20} />
                    </div>
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 bg-gradient-to-r ${category.color} border ${category.borderColor} rounded-lg ${category.textColor} text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
