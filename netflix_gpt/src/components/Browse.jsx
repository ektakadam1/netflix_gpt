import React, { useState } from 'react';
import Header from './Header';
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase.js';
import {useNavigate} from 'react-router-dom';
function Browse() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
    navigate('/');
}).catch((error) => {
  console.log(error.message);
});


  }
  return (
    <>
      <div className="flex">
        <div className="w-screen">
          <Header />
        </div>
        <button
          className="w-10 absolute right-4 top-4 cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src="https://occ-0-3216-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXh10ggeTTdhZO1JIH_SNQ4gp0vsNnWfE8Mg2ckwzGvUzJMRpPFCujRK3Ex5K9VbkIyvUHQ92LBVdsemkj6zlpquL-qWMCNKeg.png?r=229"
            alt="img_user"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-4 top-16 bg-white shadow-md rounded-md p-4">
            <ul>
              <li className="cursor-pointer hover:bg-gray-200 p-2">Profile</li>
              <li className="cursor-pointer hover:bg-gray-200 p-2">Settings</li>
              <li className="cursor-pointer hover:bg-gray-200 p-2" onClick={handleSignOut}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Browse;