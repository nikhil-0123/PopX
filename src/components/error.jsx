const Error = ({ message }) => {
  if (!message) return null;

  return (
    <div className="w-full bg-amber-200 h-12 flex items-center justify-center transition-opacity duration-500 ease-in-out">
      <div className="flex items-center gap-4">
        <p className="text-gray-800">{message}</p>
      </div>
    </div>
  );
};

export default Error;
