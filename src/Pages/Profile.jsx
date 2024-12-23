import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserDetails";

const Profile = () => {
  const { name, email, occupation } = useUser();
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-purple-300 p-4">
      <div className="grid place-items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg text-black">
          <h1 className="text-2xl md:text-4xl font-bold text-center text-black mb-4">Hello, {name}!</h1>
          <div className="mb-4">
            <h2 className="text-2xl md:text-2xl font-semibold text-purple-900">Email:</h2>
            <p className="text-lg md:text-xl">{email}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-2xl md:text-2xl font-semibold text-purple-900">Occupation:</h2>
            <p className="text-lg md:text-xl">{occupation}</p>
          </div>
          <Link to="/home" className="block text-center bg-purple-900 rounded-lg text-white p-2 mt-4">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
