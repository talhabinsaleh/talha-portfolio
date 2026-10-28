// Intro curtain: counts 000 → 100 and wipes upward. Pure CSS (see .loader in globals.css), so it
// plays on first paint while the page underneath is already rendered. Hidden after the first visit
// in a session by the inline script in the layout.
export default function Loader() {
  return (
    <div aria-hidden className="loader fixed inset-0 z-[200] flex flex-col justify-between bg-accent p-5 text-neutral-950 sm:p-10">
      <div className="flex justify-between font-display text-sm font-semibold uppercase sm:text-base">
        <span>Talha Bin Saleh</span>
        <span>Portfolio ©2026</span>
      </div>
      <div>
        <div className="flex items-end justify-between gap-4">
          <p className="max-w-48 font-display text-sm font-semibold uppercase sm:text-base">Full-stack developer — loading the good stuff</p>
          <span className="loader-count font-display text-[26vw] leading-[0.8] font-extrabold tracking-tighter sm:text-[14rem]" />
        </div>
        <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-neutral-950/15">
          <div className="loader-bar h-full origin-left bg-neutral-950" />
        </div>
      </div>
    </div>
  );
}
