import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  HomeIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

export function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden lg:block fixed left-0 top-0  h-screen">
      <Card className="h-full w-full rounded-none">
        <div className="mb-2 p-4">
          <img
            src="logo.png"
            height={560}
            width={560}
            className="h-44 w-44 mx-auto"
          />
        </div>
        <List className="font-semibold h-full">
          <Link to={"/"}>
            <ListItem
              className={`${
                pathname == "/" ? "bg-gray-400" : ""
              } active:bg-gray-400 focus:bg-gray-400 selection:bg-gray-400`}
            >
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inicio
            </ListItem>
          </Link>
          <Link to={"/sales"}>
            <ListItem
              className={`${
                pathname == "/sales" ? "bg-gray-400" : ""
              } active:bg-gray-400 focus:bg-gray-400 selection:bg-gray-400`}
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              Ventas
            </ListItem>
          </Link>
          <Link to={"/history"}>
            <ListItem
              className={`${
                pathname == "/history" ? "bg-gray-400" : ""
              } active:bg-gray-400 focus:bg-gray-400 selection:bg-gray-400`}
            >
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Historial
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <Link to={"/dashboard"}>
            <ListItem
              className={`${
                pathname == "/dashboard" ? "bg-gray-400" : ""
              } active:bg-gray-400 focus:bg-gray-400 selection:bg-gray-400`}
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link to={"/config"} className="">
            <ListItem
              className={`${
                pathname == "/config" ? "bg-gray-400" : ""
              } active:bg-gray-400 focus:bg-gray-400 selection:bg-gray-400`}
            >
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Configuración
            </ListItem>
          </Link>
          <ListItem className={``}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Cerrar sesión
          </ListItem>
        </List>
      </Card>
    </aside>
  );
}
