import useSkills from '../hooks/useSkills';
import SkillTag from './SkillTag';

export default function SkillsList() {
  const { skills, loading, error } = useSkills();

  if (loading) return <div className="text-white text-center">Chargement des compétences...</div>;
  if (error) return <div className="text-red-500 text-center">Erreur : {error}</div>;

  // Fusionner tous les skills en un tableau
  const allSkills = [
    ...(skills.frontend || []),
    ...(skills.backend || []),
    ...(skills.tools || [])
  ];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {allSkills.map((skill, index) => (
        <SkillTag key={index} name={skill} />
      ))}
    </div>
  );
}
