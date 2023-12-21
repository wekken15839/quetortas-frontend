import { Card } from "@material-tailwind/react";
import AddOrderForm from "./AddOrderForm";
import { FaShop } from "react-icons/fa6";
import TestForm from "./TestForm";
import { PendingTable } from "../../ui/PendingTable";
import DashboardCard from "../../ui/DashboardCard";

export default function HomePage() {
  return (
    <>
      <main className="grid grid-cols-1 grid-rows-1 2xl:grid-cols-[700px,1fr] 2xl:grid-rows-[1fr,20%]  h-full w-full p-4 gap-3">
        <AddOrderForm />
        <div className="hidden 2xl:block 2xl:col-[2] border border-blue-gray-300 rounded-md">
          <PendingTable />
        </div>
        <div className="hidden md:flex 2xl:row-[2] 2xl:col-span-full w-full gap-4 justify-evenly mt-2">
          <DashboardCard
            icon={<FaShop />}
            text={"Pendientes"}
            day={"Hoy"}
            number={5}
            classNameStyle={" text-blue-gray-600 font-bold"}
          />
          <DashboardCard
            icon={<FaShop />}
            text={"Cancelados"}
            day={"Esta semana"}
            number={2}
            classNameStyle={"b text-blue-gray-600 font-bold"}
          />
          <DashboardCard
            icon={<FaShop />}
            text={"Ingresos"}
            day={"Este mes"}
            number={"1.175.000"}
            classNameStyle={" text-blue-gray-600 font-bold"}
          />
          <DashboardCard
            icon={<FaShop />}
            text={"Ventas"}
            day={"Este año"}
            number={233}
            classNameStyle={" text-blue-gray-600 font-bold"}
          />
        </div>
      </main>
    </>
  );
}
