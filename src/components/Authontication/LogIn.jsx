import React, { useContext } from 'react';
import Navbar from '../Header/Navbar';
import { Form, Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const LogIn = () => {

    const {user, login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    console.log (from)
    console.log (user)

    const handleLogin = (e) => {

        e.preventDefault()


        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        console.log (email, password)


        login (email, password)
        .then ((result) => { 


            const logged = result.user;
            console.log (logged)
            navigate (from, { replace: true })
            
        })
        .catch (err => { 

            console.log (err)
        });
    }



    return (
        <div>

            <Navbar></Navbar>



            <div className='min-h-min '>

                
                        <div className="card  lg:w-full min-w-max lg:max-w-sm shadow-2xl bg-base-100 mx-auto p-8">
                            
                        <div>
                                    <p className='text-3xl font-bold'>Log In Your Accunt</p>


                                </div>




                            <Form onSubmit={handleLogin} className="card-body">



                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </Form>


                            <p className='font-bold'>Don't have an account ? <Link to='/register' className='btn-link'>Register</Link></p>
                       
                </div>





            </div>
        </div>
    );
};

export default LogIn;