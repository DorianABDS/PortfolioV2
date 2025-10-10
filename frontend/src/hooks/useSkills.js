import { useState, useEffect } from "react";

export default function useSkills() {
  const [skills, setSkills] = useState({ frontend: [], backend: [], tools: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/skills");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          setSkills(data[0]);
        } else if (data) {
          setSkills(data);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message || "Erreur lors du fetch des skills");
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return { skills, loading, error };
}
