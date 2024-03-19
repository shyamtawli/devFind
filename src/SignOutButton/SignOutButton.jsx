import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utils/Firebase';

const SignOutButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = () => {
    
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };

  return (
    <div>
      {/* <div className="mt-4 block cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary px-[10px] py-1.5 text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white"> */}
      {/* <button onClick={handleSignOut}>Sign out</button> */}
      <button className="menu-button cursor-pointer rounded-lg border-2 border-textSecondary bg-textSecondary text-center font-poppoins text-sm transition-all duration-500 hover:bg-transparent hover:text-textSecondary dark:text-white">
        <span
          onClick={toggleMenu}
          style={{
            color: 'black',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          {'</>'}
        </span>
      </button>{' '}
      {isMenuOpen && (
        <div className="mt-2 rounded-lg bg-gray-200 text-center font-poppoins text-sm transition-all duration-500 hover:bg-gray-200 hover:text-textSecondary dark:text-white">
          <ul>
            <li>Account</li>
            <li>Settings</li>
            <li>
              <button>Help Centre</button>
            </li>
            <br />
            <hr />
            <li>
              <button style={{ marginTop: '1px' }} onClick={handleSignOut}>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default SignOutButton;
