import { Card, Typography } from "@material-tailwind/react";
import { BiRightArrow } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

const TABLE_HEAD = ["Cliente", "Torta", "Tamaño", "", ""];

const TABLE_ROWS = [
  {
    client: "Michael Jimenez",
    cakeType: "Torta Fría",
    cakeSyze: "3/4",
  },
  {
    client: "Carlos Portillo",
    cakeType: "Ponqué",
    cakeSyze: "Completa",
  },
  {
    client: "María José",
    cakeType: "Ponqué",
    cakeSyze: "Estándar",
  },
  {
    client: "Michael Jimenez",
    cakeType: "Torta Fría",
    cakeSyze: "Completa",
  },
  {
    client: "Cleimer Quintero",
    cakeType: "Especial 3 leches",
    cakeSyze: "3/4",
  },
];

export function PendingTable() {
  return (
    <Card className="h-full w-full overflow-auto bg-white p-5 max-w-lg">
      <h1 className="font-bold text-2xl text-center my-5">
        Pedidos Pendientes
      </h1>
      <table className="w-full min-w-max table-auto text-left rounded-md">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ client, cakeType, cakeSyze }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {client}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {cakeSyze}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  Hola
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  <MdDone />
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  <FaEye className="hover:text-blue-500" />
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
