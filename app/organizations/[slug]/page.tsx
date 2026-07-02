'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function OrganizationDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [org, setOrg] = useState<any>(null);
  const [members, setMembers] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orgRes, membersRes, projectsRes] = await Promise.all([
          fetch(`/api/organizations/${slug}`),
          fetch(`/api/organizations/${slug}/members`),
          fetch(`/api/organizations/${slug}/projects`),
        ]);

        if (orgRes.ok) setOrg(await orgRes.json());
        if (membersRes.ok) setMembers(await membersRes.json());
        if (projectsRes.ok) setProjects(await projectsRes.json());
      } catch (err) {
        console.error('Failed to fetch organization data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  if (loading) return <div className="alert alert-info">Loading...</div>;
  if (!org) return <div className="alert alert-error">Organization not found</div>;

  return (
    <div>
      <style>{`
        .org-header {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          margin-bottom: var(--spacing-xl);
          border: 1px solid var(--color-border);
        }
        .section {
          background: white;
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          margin-bottom: var(--spacing-xl);
          border: 1px solid var(--color-border);
        }
        .section h2 {
          margin-top: 0;
        }
      `}</style>

      <div className="org-header">
        <h1>{org.name}</h1>
        {org.description && <p>{org.description}</p>}
        {org.website && <p><a href={org.website} target="_blank" rel="noopener noreferrer">{org.website}</a></p>}
      </div>

      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h2>Members ({members.length})</h2>
          <Link href={`/organizations/${slug}/members/invite`} className="btn btn-primary btn-sm">Invite Member</Link>
        </div>
        {members.length === 0 ? (
          <p>No members yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id}>
                  <td>{member.user.name}</td>
                  <td>{member.user.email}</td>
                  <td>{member.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h2>Projects ({projects.length})</h2>
          <Link href={`/organizations/${slug}/projects/new`} className="btn btn-primary btn-sm">New Project</Link>
        </div>
        {projects.length === 0 ? (
          <p>No projects yet. Create one to get started!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td><Link href={`/projects/${project.slug}`}>{project.name}</Link></td>
                  <td>{project.description || '-'}</td>
                  <td>{new Date(project.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}