import { Card } from "@material-tailwind/react";

export default function DashboardCard({
  text,
  icon,
  classNameStyle,
  day,
  number,
}) {
  return (
    <Card
      variant="gradient"
      className={`shadow w-[17.3rem] max-w-xs border border-blue-gray-300 p-5 ${classNameStyle} `}
    >
      <div className="">
        <h3 className="font-bold text-lg ">{text}</h3>
        <div className="">
          <h3>{day}</h3>
          <div className="flex items-center justify-end gap-2">
            {icon}
            <span className="text-xl">{number}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
