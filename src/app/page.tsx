import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import FakeChart from "@/components/cards/FakeChart";
import CardShell from "@/components/ui/CardShell";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E7D2] flex justify-center">
      <div className="relative w-[1920px] min-h-[2258px] bg-[#F3E7D2]">
        {/* SIDEBAR */}
        <aside className="absolute left-0 top-0 w-[176px] h-full bg-[#F3E7D2] border-r border-[#0F0F0E] pb-[16px]">
          <Sidebar />
        </aside>

        {/* MAIN */}
        <div className="ml-[176px] w-[1744px] min-h-[2258px]">
          {/* HEADER */}
          <header className="h-[70px] px-[16px] border-b border-[#5E5644] flex items-center">
            <Header />
          </header>

          {/* CONTENT */}
          <div className="px-[16px] pt-[16px] pb-[32px]">
            {/* BLUE SUMMARY BANNER */}
            <div className="h-[120px] rounded-[8px] bg-[#7FB1E3] border border-black/10 flex items-stretch overflow-hidden">
              <div className="flex-1 p-4 text-[#0F0F0E]">
                <div className="text-[10px] opacity-80">Summary of your portfolio</div>
                <div className="text-[12px] font-semibold mt-1">Monday · 21 Jan</div>
                <p className="text-[11px] mt-2 leading-4 max-w-[900px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim risus non est aliquet
                  semper. Vivamus viverra quis velit a suscipit. Aliquam blandit quam sagittis ex cursus lobortis.
                </p>
              </div>
              <div className="w-[120px] bg-[#F4C2A1] border-l border-black/10" />
            </div>

            {/* DASHBOARD GRID */}
            <div className="mt-6 grid grid-cols-12 gap-6">
              {/* WEALTH PROJECTIONS (LEFT) */}
              <div className="col-span-8 h-[360px]">
                <CardShell
                  title="Wealth Projections"
                  barColor="#7FD1C2"
                  className="h-[360px]"
                  rightSlot={
                    <button className="text-[10px] px-2 py-[2px] border rounded bg-white">
                      SETTINGS
                    </button>
                  }
                >
                  {/* top stats row placeholder */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-[18px] font-semibold">$13,107,926.29</div>
                      <div className="text-[10px] text-gray-500">CAD · ALL TIME</div>
                    </div>
                    <div className="text-[10px] text-gray-500">+4.5% · $1,106,999</div>
                  </div>

                  <div className="h-[260px]">
                    <FakeChart />
                  </div>

                  {/* bottom legend placeholder */}
                  <div className="mt-2 flex gap-4 text-[10px] text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#7FD1C2]" />
                      Likely Scenario
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#4DB8A6]" />
                      Optimistic Scenario
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#2D9C8C]" />
                      Conservative Scenario
                    </div>
                  </div>
                </CardShell>
              </div>

              {/* ACTION ITEMS (RIGHT) */}
              <div className="col-span-4 h-[360px]">
                <CardShell
                  title="Action Items"
                  barColor="#F4F0E6"
                  className="h-[360px]"
                  rightSlot={
                    <div className="flex gap-2">
                      <button className="px-2 py-[2px] text-[10px] border rounded bg-white">Active</button>
                      <button className="px-2 py-[2px] text-[10px] border rounded">Past</button>
                      <button className="px-2 py-[2px] text-[10px] border rounded">Snoozed</button>
                    </div>
                  }
                >
                  <div className="space-y-3">
                    {[
                      { title: "Renew Desjardins insurance for Canal House", meta: "CapEx · 245 Ridesau Street", due: "Due 7/31/2025" },
                      { title: "Send rent reminder for Canal House unit 903", meta: "CapEx · 245 Ridesau Street", due: "Due 7/30/2025" },
                      { title: "Verify municipal tax installment before July deadline", meta: "CapEx · 245 Ridesau Street", due: "Due 7/15/2025" },
                      { title: "Send rent reminder for Canal House unit 903", meta: "CapEx · 245 Ridesau Street", due: "Due 7/30/2025" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2 p-3 border rounded bg-[#F8F6F1]">
                        <input type="checkbox" className="mt-1" />
                        <div className="flex-1">
                          <div className="text-[11px] font-semibold">{item.title}</div>
                          <div className="text-[10px] text-gray-500">{item.meta}</div>
                          <div className="mt-1 inline-block text-[10px] px-2 py-[2px] border rounded bg-white">
                            {item.due}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardShell>
              </div>

              {/* TOTAL INVESTMENT & RETURN (LEFT) */}
              <div className="col-span-6 h-[260px]">
                <CardShell title="Total Investment & return" barColor="#B7B0F6" className="h-[260px]">
                  <div className="text-center mt-4">
                    <div className="text-[10px] text-gray-500">Return on investment</div>
                    <div className="text-[26px] font-semibold">+120.5%</div>
                    <div className="text-[10px] text-gray-500">( +18.7% annualized )</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3 text-[10px]">
                    <div className="border rounded p-2 bg-[#F8F6FF]">
                      <div className="text-gray-500">Total Investment</div>
                      <div className="font-semibold">$1,383,049</div>
                    </div>
                    <div className="border rounded p-2 bg-[#F8F6FF]">
                      <div className="text-gray-500">With Stabilization</div>
                      <div className="font-semibold">$5,678,500</div>
                    </div>
                  </div>
                </CardShell>
              </div>

              {/* PORTFOLIO OVERVIEW (RIGHT) */}
              <div className="col-span-6 h-[260px]">
                <CardShell title="Portfolio Overview" barColor="#F2A089" className="h-[260px]">
                  <div className="grid grid-cols-2 gap-3 text-[10px]">
                    <div className="border rounded p-3 bg-[#FFF6F3]">
                      <div className="text-gray-500">Buildings</div>
                      <div className="text-[20px] font-semibold">5</div>
                    </div>
                    <div className="border rounded p-3 bg-[#FFF6F3]">
                      <div className="text-gray-500">Units</div>
                      <div className="text-[20px] font-semibold">106</div>
                    </div>
                    <div className="border rounded p-3 bg-[#FFF6F3]">
                      <div className="text-gray-500">Annual Revenue</div>
                      <div className="font-semibold">$3,078,000</div>
                    </div>
                    <div className="border rounded p-3 bg-[#FFF6F3]">
                      <div className="text-gray-500">Net Cashflow</div>
                      <div className="font-semibold">$275,929</div>
                    </div>
                  </div>
                </CardShell>
              </div>

              {/* SPENDING ANALYTICS (LEFT WIDE) */}
              <div className="col-span-8 h-[260px]">
                <CardShell
                  title="Spending Analytics"
                  barColor="#F6D17E"
                  className="h-[260px]"
                  rightSlot={
                    <div className="flex gap-2">
                      <button className="px-2 py-[2px] text-[10px] border rounded bg-white">Repairs & Maintenance</button>
                      <button className="px-2 py-[2px] text-[10px] border rounded bg-white">Last 3 Months</button>
                    </div>
                  }
                >
                  <div className="h-[180px] flex items-end gap-3">
                    {[40, 70, 55, 90, 60, 110, 80, 120].map((h, i) => (
                      <div key={i} className="flex-1 border rounded bg-[#FDF6E6] overflow-hidden">
                        <div className="w-full bg-[#F6D17E]" style={{ height: `${h}px` }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-[10px] text-gray-500">
                    Your “Repairs & Maintenance” spend is 50% in the last 3 months.
                  </div>
                </CardShell>
              </div>

              {/* PROPERTY UNITS (RIGHT) */}
              <div className="col-span-4 h-[260px]">
                <CardShell title="Property Units" barColor="#9CC7F4" className="h-[260px]">
                  <div className="text-[14px] font-semibold mt-1">15 Buildings</div>

                  <div className="mt-4 h-[90px] flex items-end gap-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-[10px] border rounded-sm ${i < 8 ? "bg-[#9CC7F4]" : "bg-[#EAEAEA]"}`}
                        style={{ height: `${40 + (i % 5) * 8}px` }}
                      />
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
                    <div>
                      <div className="font-semibold">7</div>
                      <div className="text-gray-500">Occupied</div>
                    </div>
                    <div>
                      <div className="font-semibold">5</div>
                      <div className="text-gray-500">Renovation</div>
                    </div>
                    <div>
                      <div className="font-semibold">3</div>
                      <div className="text-gray-500">Vacant</div>
                    </div>
                  </div>
                </CardShell>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}