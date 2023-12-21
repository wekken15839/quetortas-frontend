export default function SalesPage() {
  return (
    <div className="bg-red-500 h-screen w-full grid grid-cols-[200px,1fr] grid-rows-[80px,1fr,80px] gap-2">
      <div className="nav bg-purple-500 row-[1] col-span-full"></div>
      <div className="aside bg-blue-500 hidden lg:block lg:col-[1] lg:row-span-full "></div>
      <div className="main bg-green-500 col-span-full lg:col-[2]  grid grid-cols-[70%,1fr] gap-2">
        <div className="col-span-full  md:col-[1] bg-cyan-500">
          <span>Main</span>
          <h1>Hola</h1>
        </div>
        <div className="hidden lg:block bg-black col-[2] text-white">Table</div>
      </div>
      <div className="footer bg-yellow-500 row-[3] col-[2]"></div>
    </div>
  );
}
