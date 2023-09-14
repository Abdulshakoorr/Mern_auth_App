import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SingUp = () => {
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log(registerUser);
      setLoading(true);
      setError(false);
      const result = await axios.post(
        "http://localhost:8000/api/v1/all-users",
        registerUser
      );
      toast.success(result?.data.message);
      console.log(result);
      setRegisterUser({
        username: "",
        email: "",
        password: "",
      });
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error.message);
      toast.error("Couldn't Register User");
    }
  };

  if (error) {
    return <p className="text-center mt-16 text-red-600">{error}</p>;
  }
  return (
    <section>
      <div className="min-h-[91vh] bg-gradient-to-b from-blue-500 to-purple-500 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                username
              </label>
              <input
                name="username"
                autoComplete="off"
                required
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                value={registerUser.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                name="email"
                autoComplete="off"
                required
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={registerUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                name="password"
                autoComplete="off"
                required
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={registerUser.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                {loading ? "loading" : "Sign Up"}
              </button>
              <p className="py-4">
                Already have an account?
                <Link
                  to="/sign-in"
                  className="text-blue-500 font-medium tracking-wide  ml-2"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingUp;
