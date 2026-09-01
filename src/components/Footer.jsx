export default function Footer() {
  return (
    <footer className="border-t border-[#2A261F] bg-[#11100F]/90 py-6 text-sm text-[#A8A39A]">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <p className="text-[#F5F3EF]">
          © {new Date().getFullYear()} MANIKANTA — CRAFTED FRAME BY FRAME.
        </p>
      </div>
    </footer>
  );
}
