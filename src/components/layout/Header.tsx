export default function Header() {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="text-[28px] font-semibold text-[#A56A2A]">
        Good Morning, Michael
      </div>

      <button className="px-4 py-2 text-[12px] border border-black/30 rounded-[6px] bg-white">
        + ADD NEW
      </button>
    </div>
  );
}