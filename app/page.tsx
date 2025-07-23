import RandomFact from './components/randomfact';
import { BlogPosts } from 'app/components/posts';

const facts = [
  'Solved 500+ algorithmic problems on LeetCode.',
  'Built an autonomous parking simulator in CARLA.',
  'Vim power user — I map custom plugins.',
  'Completed half marathon in under 2 hours.',
  'My GitHub repo has 100+ stars!',
  'I love dark mode more than light themes.',
];

function NowSection() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Some great books I've read on AI</h2>
      <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
        <li>Life 3.0 - Max Tegmark </li>
        <li>The Singularity is Nearer - Ray Kurzweil</li>
        <li>Rule of the Robots - Martin Ford</li>
        <li>What We Owe The Future - William MacAskill</li>
        <li>The Alignment Problem - Brian Christian</li>
      </ul>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="flex flex-col md:flex-row gap-8">
      {/* Left column: profile and intro */}
      <div className="md:w-1/3 flex flex-col items-start">
        <img
          src="/profile.jpg"
          alt="Profile picture"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-semibold tracking-tighter mb-4">
          Pranav Mallela
        </h1>
        <p className="mb-4">
          {`Bachelors in CS. Masters in CS. Pivoting to ML. Excited about Computer Vision.`}
        </p>
      </div>

      {/* Right column: blog posts + fun component */}
      <div className="md:flex-1">
        {/* <BlogPosts /> */}
        <RandomFact />
        <NowSection />
      </div>
    </section>
  );
}
