export default function FakeChart() {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Graph area only (title removed because CardShell already has it) */}
      <div className="relative flex-1 bg-white border border-black/20 rounded-[6px] overflow-hidden">
        {/* grid lines */}
        <div className="absolute inset-0 grid grid-rows-6 opacity-25">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-t border-black/20" />
          ))}
        </div>

        {/* subtle vertical grid lines */}
        <div className="absolute inset-0 grid grid-cols-10 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border-l border-black/30" />
          ))}
        </div>

        {/* fake growth area */}
        <div className="absolute bottom-0 left-0 right-0 h-[72%] bg-gradient-to-t from-[#3BAA8F] to-[#9ED9CB] opacity-85 clip-path-chart" />
      </div>
    </div>
  );
}