import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-10 text-center">
        <h1 className="text-8xl font-extrabold text-blue-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you're looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
