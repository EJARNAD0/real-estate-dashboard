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
    <div className={`rounded-[8px] bg-white border border-black/10 overflow-hidden ${className}`}>
      <div className="h-[34px] flex items-center justify-between px-3 border-b border-black/10" style={{ background: barColor }}>
        <div className="text-[12px] font-semibold">{title}</div>
        <div className="text-[11px]">{rightSlot}</div>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}