interface WelcomeSectionProps {
  name: string;
}

export function WelcomeSection({ name }: WelcomeSectionProps) {
  return (
    <section className="mb-9">
      <p className="mb-2 text-[11px] font-semibold tracking-[0.15em] text-[#938E9B] uppercase">
        Monday, November 16, 2026
      </p>

      <h1 className="text-[32px] leading-tight font-semibold tracking-[-0.065em] sm:text-[42px]">
        Good morning, {name}
        <span className="text-[#806DE0]">.</span>
      </h1>

      <p className="mt-2 text-sm text-[#85818D] sm:text-[15px]">
        Here's what's happening across your workspace today.
      </p>
    </section>
  );
}