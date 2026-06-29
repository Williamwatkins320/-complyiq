"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const projectSlug = params.projectSlug as string;

  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/auth/signin");
      return;
    }

    fetchProject();
  }, [slug, projectSlug, router]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/organizations/${slug}/projects/${projectSlug}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data.project);
        setTasks([
          { id: "1", name: "Review compliance documentation", status: "pending" },
          { id: "2", name: "Conduct security audit", status: "in-progress" },
          { id: "3", name: "Update privacy policy", status: "pending" },
        ]);
      } else {
        router.push(`/organizations/${slug}`);
      }
    } catch (error) {
      console.error("Failed to fetch project:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <main className="page-shell"><p>Loading...</p></main>;
  }

  if (!project) {
    return <main className="page-shell"><p>Project not found</p></main>;
  }

  return (
    <main className="page-shell">
      <Link href={`/organizations/${slug}`} className="back-link">← Back to Organization</Link>

      <div className="project-header">
        <div>
          <h1>{project.name}</h1>
          <p>Compliance workflow tasks</p>
        </div>
      </div>

      <section className="dashboard-section">
        <div className="section-header">
          <h2>Tasks</h2>
          <button className="btn-primary">Add Task</button>
        </div>

        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-info">
                <h3>{task.name}</h3>
                <span className={`task-status ${task.status}`}>{task.status}</span>
              </div>
              <button className="btn-secondary">View Details</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}