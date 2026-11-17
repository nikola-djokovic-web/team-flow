interface SectionHeadingProps {
  title: string;
  action?: string;
}

export function SectionHeading({
  title,
  action,
}: SectionHeadingProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="text-[17px] font-semibold tracking-[-0.035em] text-[#24232B]">
        {title}
      </h2>

      {action && (
        <button className="flex items-center gap-1 text-sm font-medium text-[#777382] transition hover:text-[#6654C7]">
          {action}
        </button>
      )}
    </div>
  );
}