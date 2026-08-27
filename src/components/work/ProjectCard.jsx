export default function ProjectCard({ project }) {
  return <article>{project?.title || "Project"}</article>;
}
