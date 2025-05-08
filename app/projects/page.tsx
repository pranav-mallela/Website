import { FaGithub } from 'react-icons/fa'
import { SiJavascript, SiPython, SiNextdotjs } from 'react-icons/si'

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One that highlights its features and goals.',
    github: 'https://github.com/yourusername/project-one',
    tech: <SiJavascript title="JavaScript" />, 
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two that explains its purpose and impact.',
    github: 'https://github.com/yourusername/project-two',
    tech: <SiPython title="Python" />, 
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three showcasing its unique aspects.',
    github: 'https://github.com/yourusername/project-three',
    tech: <SiNextdotjs title="Next.js" />, 
  },
]

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <span className="text-xl">{project.tech}</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-500 hover:underline text-sm"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
