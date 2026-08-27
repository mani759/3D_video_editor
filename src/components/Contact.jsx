export default function Contact() {
  return (
    <section className="space-y-6 py-10" id="contact">
      <div className="max-w-4xl space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#FFB52E]">
          Contact
        </p>
        <h2 className="text-3xl font-semibold text-[#F5F3EF]">
          Let's collaborate
        </h2>
        <p className="text-[#A8A39A] sm:text-lg">
          Reach out for project bookings, showreel updates, or creative video
          direction.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-block rounded-full bg-[#FFB52E] px-6 py-3 text-sm font-semibold text-[#080808] transition hover:bg-[#FFD666]"
        >
          Say hello
        </a>
      </div>
    </section>
  );
}
