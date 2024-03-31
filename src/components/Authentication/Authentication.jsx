import React, { useRef, useState } from 'react';
import { CheckValidData } from '../../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Utils/Firebase';
import { addUser } from '../../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Authentication = () => {
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const HandleButtonClick = () => {
    const message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: 'add yours.jpg',
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth?.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              navigate('/app');
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/app');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  const ToggleSignInForm = () => {
    // Toggling function for SignIn and SignUp form

    SetIsSignInForm(!isSignInForm);
  };
  return (
    <div className="flex ">
      {/* we used preventDefault to prevvent the form to get submitted on clicking the button */}
      <div className="w-[550px]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="left-0 right-0 mx-20 my-36 flex  flex-wrap rounded-lg bg-gray-200 p-5"
        >
          <h1 className="mx-2 py-4 text-3xl font-bold">{isSignInForm ? 'Sign in' : 'Sign up'}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="m-2 w-full rounded-lg p-3" />}
          <input ref={email} type="text" placeholder="Email address" className="m-2 w-full rounded-lg p-3" />
          <input ref={password} type="password" placeholder="Password" className="m-2 w-full rounded-lg p-3" />
          <p className="mx-4 text-red-500">{errorMessage}</p>
          <button className="mx-2 my-4 w-full rounded-lg bg-blue-500 py-4" onClick={HandleButtonClick}>
            {isSignInForm ? 'Sign in' : 'Sign up'}
          </button>
          <div className="mx-auto mt-8 flex gap-4">
            <p>{isSignInForm ? 'New to devFind?' : 'Already on devFind?'}</p>
            <p className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={ToggleSignInForm}>
              {isSignInForm ? 'Join now' : 'Sign in'}
            </p>
          </div>
        </form>
      </div>
      <div className="m-auto w-1/2 items-center">
        {/* <FontAwesomeIcon icon={faCode} size='w-[800px]'/> */}
        {/* <h1 className='text-3xl font-extrabold text-blue-600'>devFind</h1> */}
        <div className="flex">
          <img className="w-[50px]" src="bracketIcon.svg"></img>
          <p className="mt-10000 text-5xl text-secondaryColor dark:text-white">dev</p>
          <p className="text-5xl text-textSecondary">Find</p>
        </div>
        <h1 className="mt-4 text-3xl shadow-md">Build Your Dream Team Today!</h1>
      </div>
    </div>
  );
};

export default Authentication;
