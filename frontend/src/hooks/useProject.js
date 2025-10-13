import { useState, useEffect } from "react";

export default function useProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Erreur lors du fetch des projets");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}