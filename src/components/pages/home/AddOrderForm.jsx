import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { FaLocationPin, FaPhoneFlip, FaUser } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import {
  Select,
  Option,
  Input,
  Textarea,
  Tooltip,
  Button,
  Card,
} from "@material-tailwind/react";
import {
  addOrderFormDefaultValues,
  cakeSizes,
  cakeSizesIcons,
  cakeTypes,
  deliveryMethods,
  deliveryMethodsIcons,
  paymentMethods,
  paymentMethodsIcons,
} from "../../../data/data";

export default function AddOrderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitted },
    watch,
  } = useForm({
    defaultValues: addOrderFormDefaultValues,
  });
  const [quantity, setQuantity] = useState(1);

  const handlePriceChange = (values) => {
    const { value } = values;
    setValue("price", value);
  };

  const handleQuantityChange = (e) => {
    const newValue = e.target.value;
    if (!isNaN(newValue) && newValue >= 0) {
      setQuantity(e.target.value);
    }
  };

  const onSubmit = handleSubmit((data) => {
    if (
      !watch().cakeSize.length > 0 ||
      !watch().cakeSize.length > 0 ||
      !watch().deliveryMethod.length > 0
    )
      return;

    const finalData = { ...data, quantity };
    console.log("data", finalData);
  });

  return (
    <form
      className="flex flex-col gap-2 w-full text-blue-gray-700 bg-white p-3 rounded-md shadow shadow-blue-gray-300 lg:p-10 xl:text-lg"
      onSubmit={onSubmit}
    >
      <h1 className="text-center text-xl lg:text-2xl lg:my-6">
        Agregar Pedido
      </h1>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="w-full md:flex-1">
          <Input
            label="Nombre del cliente"
            icon={<FaUser />}
            {...register("client.name", {
              maxLength: { message: "Máximo 50 letras", value: 50 },
            })}
          />
          {errors.client?.name && (
            <span className="text-xs text-center text-red-500 font-bold pl-2">
              {errors.client?.name.message}
            </span>
          )}
        </div>
        <Input
          type="number"
          label="Teléfono"
          icon={<FaPhoneFlip />}
          className=""
          containerProps={{ className: "w-full sm:w-fit" }}
          {...register("client.phone", {
            maxLength: { message: "Máximo 10 números", value: 10 },
          })}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex flex-col w-full">
          <Select
            label="Tipo de Torta"
            className=""
            name="cakeType"
            onChange={(e) => setValue("cakeType", e, { shouldDirty: true })}
          >
            {cakeTypes.map((t, index) => (
              <Option key={index} value={t} className="">
                <span>{t}</span>
              </Option>
            ))}
          </Select>
          {isSubmitted && !watch().cakeType.length > 0 && (
            <span className="text-xs  text-red-500 font-bold pl-2">
              Requerido
            </span>
          )}
        </div>
        <div className="flex flex-col w-full">
          <Select
            label="Tamaño de Torta"
            className=""
            onChange={(e) => setValue("cakeSize", e)}
          >
            {cakeSizes.map((t, index) => (
              <Option key={index} value={t} className="">
                <div className="flex items-center gap-1">
                  {cakeSizesIcons[index]}
                  <span>{t}</span>
                </div>
              </Option>
            ))}
          </Select>
          {isSubmitted && !watch().cakeSize.length > 0 && (
            <span className="text-xs  text-red-500 font-bold pl-2">
              Requerido
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full gap-2">
        <div className="flex flex-col">
          <Select
            label="Método de Entrega"
            className="w-full"
            containerProps={{ className: "" }}
            onChange={(e) => setValue("deliveryMethod", e)}
          >
            {deliveryMethods.map((t, index) => (
              <Option key={index} value={t} className="">
                <div className="flex items-center gap-1">
                  {deliveryMethodsIcons[index]}
                  <span>{t}</span>
                </div>
              </Option>
            ))}
          </Select>
          {isSubmitted && !watch().deliveryMethod.length > 0 && (
            <span className="text-xs  text-red-500 font-bold pl-2">
              Requerido
            </span>
          )}
        </div>

        <div className="flex-1">
          <Input
            label="Dirección (Opcional)"
            icon={<FaLocationPin />}
            {...register("client.address", {
              maxLength: { value: 150, message: "Máximo 150 caracteres" },
            })}
          />
          {errors.client?.address && (
            <span className="">{errors.client?.address.message}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-2">
        <div className="flex flex-col gap-1 w-full sm:w-fit">
          <Select
            label="Método de Pago"
            className="w-full"
            containerProps={{ className: "" }}
            onChange={(e) => setValue("paymentMethod", e)}
          >
            {paymentMethods.map((t, index) => (
              <Option key={index} value={t} className="">
                <div className="flex items-center gap-1">
                  {paymentMethodsIcons[index]}
                  <span>{t}</span>
                </div>
              </Option>
            ))}
          </Select>
          {isSubmitted && !watch().paymentMethod.length > 0 && (
            <span className="text-xs  text-red-500 font-bold pl-2">
              Requerido
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1 fit">
          <Input
            label="Fecha de Entrega"
            type="datetime-local"
            containerProps={{ className: "w-fit mx-auto" }}
            {...register("deliveryDate", { required: true })}
          />
          {errors.deliveryDate && (
            <span className="text-xs text-center text-red-500 font-bold pl-2">
              Requerido
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="font-semibold text-blue-gray-400">Precio</span>
        <NumericFormat
          thousandSeparator={true}
          decimalScale={0}
          fixedDecimalScale={false}
          prefix={" $"}
          placeholder="$"
          onValueChange={handlePriceChange}
          className="bg-inherit border border-blue-gray-300 rounded-md pl-1 py-1"
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="cursor-pointer">
          <Tooltip content="Restar">
            <MinusCircleIcon
              height={30}
              width={30}
              onClick={() => setQuantity(quantity - 1)}
            />
          </Tooltip>
        </div>
        <div className="">
          <Tooltip content="Cantidad" className="">
            <div className="flex flex-col items-center">
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={handleQuantityChange}
                className="bg-inherit w-14 text-center text-xl border border-blue-gray-300 rounded-md xl:mx-1"
              />
              <span className="text-xs 2xl:hidden">Cantidad</span>
            </div>
          </Tooltip>
        </div>
        <div className="cursor-pointer">
          <Tooltip content="Sumar">
            <PlusCircleIcon
              height={30}
              width={30}
              onClick={() => setQuantity(quantity + 1)}
            />
          </Tooltip>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex-1">
          <Textarea
            label="Descripción"
            {...register("description", {
              maxLength: { value: 200, message: "Máximo 200 caracteres" },
            })}
          />
          {errors.description && (
            <span className="text-lg text-red-500 font-bold pl-2">
              {errors.description.message}
            </span>
          )}
        </div>
        <button
          disabled={
            (isSubmitted && !watch().cakeType.length > 0) ||
            (isSubmitted && !watch().cakeSize.length > 0)
              ? true
              : false
          }
          className="cursor-pointer"
        >
          <Tooltip content="Agregar Pedido">
            <PlusCircleIcon className="w-20 h-20 mx-auto" />
          </Tooltip>
        </button>
      </div>
    </form>
  );
}
