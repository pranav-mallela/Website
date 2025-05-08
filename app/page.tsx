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
          My Portfolio
        </h1>
        <p className="mb-4">
          {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
          Vim's keystroke commands and tabs' flexibility for personal viewing
          preferences. This extends to my support for static typing, where its
          early error detection ensures cleaner code, and my preference for dark
          mode, which eases long coding sessions by reducing eye strain.`}
        </p>
      </div>

      {/* Right column: blog posts + fun component */}
      <div className="md:flex-1">
        <BlogPosts />
        <RandomFact />
      </div>
    </section>
  );
}
