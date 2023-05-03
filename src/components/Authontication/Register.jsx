import React, { useContext } from 'react';
import Navbar from '../Header/Navbar';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Register = () => {


    const {register, profileUpdate} = useContext(AuthContext)



const handleRegister = (e) => { 

    e.preventDefault()
    const form = e.target;

    const name = form.name.value;
    const url = form.photourl.value;

    const email = form.email.value;
    const password = form.password.value;


    console.log (email, password)

    




    register (email, password)
    .then ( (result) => {


        const user = result.user;
        console.log (user);
     })
     .catch ( (err) => { 

        console.log (err);
     });

    


    
}


    return (
        <div>
            <Navbar></Navbar>

           <div>



           <div className="card  lg:w-full min-w-max lg:max-w-sm shadow-2xl bg-base-100 mx-auto p-8">
                            
                            <div>
                                        <p className='text-3xl font-bold'>Register Your Accunt</p>
    
    
                                    </div>
    
    
    
    
                                <Form onSubmit={handleRegister} className="card-body">
    
    
    
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                                    </div>

                                    
                                   
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </Form>
    
    
                                <p className='font-bold'>Already have an account ? <Link to= "/logIn" className='btn-link'>Log In</Link></p>
                           
                    </div>
    
           </div>
            
        </div>
    );
};

export default Register;