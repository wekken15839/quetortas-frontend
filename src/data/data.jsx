import { FaHandHoldingUsd, FaCreditCard } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { TbBrandCakephp } from "react-icons/tb";
import { BiSolidCake } from "react-icons/bi";

export const cakeTypes = ["Torta Fría", "Ponqué"];
export const cakeSizes = ["Completa", "3/4"];
export const cakeSizesIcons = [<BiSolidCake />, <TbBrandCakephp />];
export const paymentMethods = ["Efectivo", "Transferencia"];
export const paymentMethodsIcons = [<FaHandHoldingUsd />, <FaCreditCard />];
export const deliveryMethods = ["Entrega", "Contraentrega"];
export const deliveryMethodsIcons = [
  <FaPeopleCarryBox />,
  <MdDeliveryDining />,
];

export const addOrderFormDefaultValues = {
  client: {
    name: "",
    phone: "",
    address: "",
  },
  cakeType: "",
  cakeSize: "",
  description: "",
  price: "",
  paymentMethod: "",
  deliveryMethod: "",
  deliveryDate: "",
  quantity: 1,
};
