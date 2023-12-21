import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  ListItemPrefix,
  ListItem,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  HomeIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-blue-gray-700">
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
    </ul>
  );

  return (
    <Navbar className="fixed left-0 top-0 rounded-b-none z-10 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 lg:hidden">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <img src="logo.png" className="w-12 h-12" />
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden items-center gap-x-2 lg:flex"></div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
