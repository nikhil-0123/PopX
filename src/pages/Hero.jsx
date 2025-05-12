import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-[375px] bg-white min-h-[600px] flex flex-col justify-end p-6 ">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to PopX</h1>
          <p className="text-xl text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-[#6C25FF] text-white font-medium py-3 rounded-md cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>
          <button
            className="w-full bg-[#EEE5FF] text-[#6C25FF] font-medium py-3 rounded-md cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}