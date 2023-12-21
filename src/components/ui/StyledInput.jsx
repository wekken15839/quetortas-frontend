export default function StyledInputContainer({ icon, children, inputId }) {
  return (
    <div className="flex border border-blue-gray-300 items-center p-2 rounded-md">
      {children}
      <label htmlFor={inputId} className="cursor-pointer">
        {icon && icon}
      </label>
    </div>
  );
}
