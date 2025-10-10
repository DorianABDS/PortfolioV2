import useSkills from '../hooks/useSkills';
import SkillTag from './SkillTag';

export default function SkillsList() {
  const { skills, loading, error } = useSkills();

  if (loading) {
    return (
      <div className="text-white text-center">
        Chargement des compétences...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">
        Erreur : {error}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {skills.map((skill, index) => (
        <SkillTag key={index} name={skill} />
      ))}
    </div>
  );
}