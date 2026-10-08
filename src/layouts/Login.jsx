import Button from "@/components/Button";

const Login = () => {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="min-w-100 bg-white rounded-2xl p-3 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-800 flex justify-center mb-4">
          Welcome
        </h1>
        <form className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <button
                type="button"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
            />

            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <Button variant="login">Sign in</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
