import { FaGithub, FaJava } from 'react-icons/fa'
import { SiPython, SiFlutter } from 'react-icons/si'

const projects = [
  {
    title: 'Highlight Generator',
    description: 'A purely token-based pipeline, when given a video of a sports game, can extract desirable highlights.',
    github: 'https://github.com/yourusername/highlight-generator',
    techIcon: <SiPython title="Python" />,
    techStack: ['VLM Finetuning', 'HuggingFace TRL', 'PEFT', 'bitsandbytes', 'Flash Attention', 'SLURM'],
  },
  {
    title: 'Mistral Driver',
    description: 'A text-based guidance model to enable efficient end-to-end autonomous planning.',
    github: 'https://github.com/yourusername/mistral-driver',
    techIcon: <SiPython title="Python" />,
    techStack: ['LLM Finetuning'],
  },
  {
    title: 'Auto Parking',
    description: 'An autonomous parking system built in using ROS and the Carla self-driving simulator.',
    github: 'https://github.com/yourusername/auto-parking',
    techIcon: <SiPython title="Python" />,
    techStack: ['ROS', 'SLAM Toolbox', 'Carla', 'Semantic LIDAR', 'Hybrid A*'],
  },
  {
    title: 'Bicycle Theft Detection',
    description: 'A deep learning solution to detect suspicious events in surveillance footage to prevent bicycle theft.',
    github: 'https://github.com/yourusername/bicycle-theft-detection',
    techIcon: <SiPython title="Python" />,
    techStack: ['Autoencoders', 'LSTMs', 'Anomaly Detection'],
  },
  {
    title: 'Academic Management System',
    description: 'A comprehensive academic record management system with role-based access for students, faculty, and academic office.',
    github: 'https://github.com/yourusername/academic-management-system',
    techIcon: <FaJava title="Java" />,
    techStack: ['Gradle', 'JUnit Jupiter', 'OOP', 'PostgreSQL'],
  },
  {
    title: 'CodeTuner',
    description: 'A java tool that can be used to modify the java bytecode for logging, caching, profiling, making methods concurrent without changing the source code.',
    github: 'https://github.com/yourusername/codetuner',
    techIcon: <FaJava title="Java" />,
    techStack: ['AspectJ', 'AOP'],
  },
  {
    title: 'UtilMan',
    description: 'An app that makes personal finance management easy and organized.',
    github: 'https://github.com/yourusername/utilman',
    techIcon: <SiFlutter title="Flutter" />,
    techStack: ['Flutter', 'Firebase'],
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
            className="border rounded-lg p-4 hover:shadow-lg hover:bg-gray-800 hover:scale-[1.02] transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <span className="text-xl">{project.techIcon}</span>
            </div>
            <p className="text-sm text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-gray-700 text-xs px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
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
