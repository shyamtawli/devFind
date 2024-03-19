import React, { useRef, useState } from 'react';
import { CheckValidData } from '../../Utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { addUser } from '../../Utils/userSlice';
import { useDispatch } from 'react-redux';

const Authentication = () => {
  const navigate = useNavigate();
  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
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
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="left-0 right-0 mx-20 my-36 flex w-3/12 flex-wrap rounded-lg bg-gray-100 p-5"
        >
          <h1 className="mx-2 py-4 text-3xl font-bold">{isSignInForm ? 'Sign in' : 'Sign up'}</h1>
          {!isSignInForm && <input ref={name} type="text" placeholder="Name" className="m-2 w-full p-3" />}
          <input ref={email} type="text" placeholder="Email address" className="m-2 w-full p-3" />
          <input ref={password} type="password" placeholder="Password" className="m-2 w-full p-3" />
          <p className="mx-4 text-red-500">{errorMessage}</p>
          <button className="mx-2 my-4 w-full bg-blue-500 py-4" onClick={HandleButtonClick}>
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
      <div className="flex w-1/2 items-center justify-center border border-red-500">
        <FontAwesomeIcon icon={faCode} size="3xl" />
      </div>
    </div>
  );
};

export default Authentication;

let str = 'hello, full stack developer';

let indexOfStr = str.indexOf('developer');
console.log(indexOfStr);

let subStrIndex = 18;
let stringToAdd = '& front end ';

let newString = str.slice(0, subStrIndex) + stringToAdd + str.slice(subStrIndex);
console.log(newString);
