export default function Sidebar() {
  const nav = [
    "Overview",
    "Forecast",
    "Assistant",
    "Buildings",
    "Units",
    "Bank Feed",
    "Reports",
    "Settings",
  ];

  const active = "Overview"; // set current active page

  return (
    <div className="h-full p-4 text-[12px]">
      <div className="font-bold mb-6">REDPOINT</div>

      <nav className="space-y-2">
        {nav.map((item) => {
          const isActive = item === active;

          return (
            <div
              key={item}
              className={[
                "px-2 py-1 rounded-[6px] cursor-pointer transition",
                isActive
                  ? "bg-[#F6D17E] border border-black/20 font-semibold"
                  : "hover:bg-black/5",
              ].join(" ")}
            >
              {item}
            </div>
          );
        })}
      </nav>

      {/* small bottom avatar placeholder like Figma */}
      <div className="absolute bottom-4 left-4">
        <div className="w-7 h-7 rounded-full border border-black/20 bg-[#EAEAEA]" />
      </div>
    </div>
  );
}
