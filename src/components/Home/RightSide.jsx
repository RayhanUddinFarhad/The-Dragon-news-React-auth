import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'
import { AuthContext } from '../Authontication/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSide = () => {

    const {googleLogIn} = useContext (AuthContext)


    const handleGoogleLogin = () => { 


        googleLogIn()
        .then ((result) => { 

              // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...



        })

        .catch (error => {

            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);         })



    }




    return (
        <div className='space-y-5'>
            <div className='space-y-4'>



                <h4 className='font-bold text-left'>Login with</h4>

                <button onClick={handleGoogleLogin} className=' btn btn-outline btn-info font-bold '>

                    <FaGoogle className='mr-2'/>
                    
                    
                    Login with google</button>


                <button className=' btn btn-outline  font-bold '>

                    <FaGithub className='mr-2'/>
                    
                    
                    Login with Github</button>
            </div>

            <div>

                <h4 className='font-bold my-2 text-left'>Find Us On</h4>


                <p className='flex items-center space-x-2 border border-gray-400 p-1'>

                    <FaFacebook className='text-indigo-500'></FaFacebook>
                    <span>facebook</span>
                </p>
                <p className='flex items-center space-x-2 border border-gray-400 p-1'>

                    <FaTwitter className='text-indigo-500'></FaTwitter>
                    <span>facebook</span>
                </p>
                <p className='flex items-center space-x-2 border border-gray-400 p-1'>

                    <FaInstagram className='text-indigo-500'></FaInstagram>
                    <span>facebook</span>
                </p>



            </div>

            <div>


                <h4 className='font-bold text-left'>Q-Zone</h4>



                    <img src= {qzone1} alt="" />

                    <img src={qzone2} alt="" />
                    <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightSide;