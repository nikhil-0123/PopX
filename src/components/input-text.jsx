const Input_text = ({
  id,
  label,
  required = false,
  types,
  ...props
}) => {
  return (
    <div>
        <div className='relative'>
            <label
            htmlFor={id}
            className="absolute left-3 -top-2.5 px-1 text-md bg-white text-violet-800"
            >
            {label} 
            {required && <strong className="text-red-700">*</strong>}
            </label>
            <input
            type={types}
            id={id}
            name={id}
            className="pl-4 pr-4 block w-full border-2  border-gray-300 rounded-md px-0 py-2 focus:border-indigo-500 focus:ring-0"
            {...props}
            />
        </div>
    </div>
  );
};

export default Input_text;
