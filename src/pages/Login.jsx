import { useNavigate } from "react-router-dom";
import Input_text from "../components/input-text";
import { useState } from "react";
import Error from "../components/error";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '', 
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 2000);
      return;
    }

    navigate('/home', {
      state: {
        user: {
          email: formData.email,
          name: 'John Doe',
        },
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center shadow-lg rounded-xl">
      <div className="w-[375px] bg-white min-h-[600px] flex flex-col justify-top pt-0 p-6">
        {error && <div className="mb-4"><Error message={error} /></div>}
        
        <div className="mb-4 w-[60%]">
          <h1 className="text-2xl font-bold">
            Signin to your PopX account
          </h1>
        </div>
        <div className="mb-10 w-[80%]">
          <p className="text-gray-600 text-xm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <Input_text types="email" label="Email address" id="email" value={formData.email} onChange={handleChange} required/>
          <Input_text types="password" label="Password" id="password" value={formData.password} onChange={handleChange} required/>
          <button
            type="submit"
            className="bg-violet-700 w-full text-white py-2.5 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
