import useSkills from '../../hooks/useSkills';
import SkillTag from '../cards/SkillTag';

export default function About() {
  const { skills, loading } = useSkills();

  return (
    <section>
      <h1>À propos</h1>
      <p>Je suis développeur fullstack...</p>

      <div>
        {loading ? (
          <p>Chargement des compétences...</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {[...(skills.frontend || []), ...(skills.backend || []), ...(skills.tools || [])].map((skill, i) => (
              <SkillTag key={i} name={skill} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
