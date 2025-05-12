import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Input_text from "../components/input-text";
import Error from "../components/error";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneno: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, agency: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, phoneno, email, password, company, agency } = formData;

    if (!fullName || !phoneno || !email || !password || !company || !agency) {
      setError('Please fill in all fields');
      setTimeout(() => setError(''), 2000);
      return;
    }

    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center shadow-lg rounded-xl">
      <div className="w-[375px] bg-white min-h-[600px] flex flex-col justify-top pt-0 p-6">
        {error && <div className="mb-4"><Error message={error} /></div>}
        <div className="mb-10 w-[60%]">
          <h1 className="text-3xl font-bold">Create your PopX account</h1>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <Input_text id="fullName" label="Full Name" types="text" value={formData.fullName} onChange={handleChange} required />
          <Input_text id="phoneno" label="Phone number" types="text" value={formData.phoneno} onChange={handleChange} required />
          <Input_text id="email" label="Email address" types="email" value={formData.email} onChange={handleChange} required />
          <Input_text id="password" label="Password" types="password" value={formData.password} onChange={handleChange} required />
          <Input_text id="company" label="Company name" types="text" value={formData.company} onChange={handleChange} required />
          
          <div className="flex flex-col space-y-2">
            <label className="font-bold">
              Are you an Agency? <strong className="text-red-800">*</strong>
            </label>
            <div className="flex flex-row space-x-10">
              <label className="flex items-center space-x-2">
                <input type="radio" name="agency" value="yes" checked={formData.agency === "yes"} onChange={handleRadioChange} className="h-4 w-4 accent-violet-800 cursor-pointer" />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="agency" value="no" checked={formData.agency === "no"} onChange={handleRadioChange} className="h-4 w-4 accent-violet-800 cursor-pointer" />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          <div>
            <button type="submit" className="bg-violet-700 w-full text-white py-2 rounded-md cursor-pointer">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
