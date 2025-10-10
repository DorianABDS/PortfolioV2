export default function SkillTag({ name }) {
  return (
    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:scale-105 transition-transform">
      {name}
    </span>
  );
}
