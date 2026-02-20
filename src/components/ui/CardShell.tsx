type Props = {
  title: string;
  barColor: string; // e.g. "#7FD1C2"
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function CardShell({
  title,
  barColor,
  rightSlot,
  children,
  className = "",
}: Props) {
  return (
    <div
      className={[
        "rounded-[8px] bg-white overflow-hidden",
        "border border-black/20",
        "shadow-[0_1px_0_rgba(0,0,0,0.10)]",
        className,
      ].join(" ")}
    >
      <div
        className="h-[34px] flex items-center justify-between px-3 border-b border-black/20"
        style={{ background: barColor }}
      >
        <div className="text-[12px] font-semibold leading-none">{title}</div>
        <div className="text-[11px] leading-none">{rightSlot}</div>
      </div>

      {/* Default body text smaller like Figma */}
      <div className="p-3 text-[11px] leading-[14px]">{children}</div>
    </div>
  );
}
