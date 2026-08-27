const projects = [
  {
    title: "Project 1",
    description: "Cinematic edit with motion storytelling.",
    thumb: "/thumbnails/project-1.jpg",
  },
  {
    title: "Project 2",
    description: "Visual branding and montage sequencing.",
    thumb: "/thumbnails/project-2.jpg",
  },
  {
    title: "Project 3",
    description: "Showreel highlight reel for a creative campaign.",
    thumb: "/thumbnails/project-3.jpg",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8 py-10" id="projects">
      <div className="max-w-4xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#FFB52E]">
            Projects
          </p>
          <h2 className="text-3xl font-extrabold tracking-[-0.06em] text-[#F5F3EF] md:text-5xl">
            Recent work
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-[#2A261F] bg-[#11100F] p-5 transition hover:-translate-y-1 hover:border-[#FFB52E]"
            >
              <div className="mb-4 h-40 rounded-2xl bg-[#080808]" />
              <h3 className="text-xl font-extrabold tracking-[-0.04em] text-[#F5F3EF]">
                {project.title}
              </h3>
              <p className="mt-2 text-base font-medium leading-6 text-[#A8A39A]">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
