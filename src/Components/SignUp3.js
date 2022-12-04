import React from 'react';
import images1 from '../images/ultimate hrm logo-05-02 2.png'
import images2 from '../images/istockphoto-1321277096-612x612 1.png'
import { Link } from 'react-router-dom';

const SignUp3 = () => {
    return (
        <div className='container '>
            <div className="row gx-5">
                <div className="col-lg-6 mt-5">
                    <Link to='/'><img className='mt-5 ms-5' src={images1} alt="" /></Link>
                    <img className='img-fluid' style={{ width: '612px', height: '437px' }} src={images2} alt="" />
                </div>
                <div className="col-lg-6 ml-10 py-10 mx-10" >
                    <div className='ms-10' style={{ boxShadow: '1px -10px 25px rgba(201, 201, 201, 0.25', }}>
                        <h4 className='signup'>SignUp Form</h4>

                        <input className='input1' type="text" placeholder='Write Password' />
                        <hr className='hr' />
                        <p className='input1' style={{ marginLeft: '100px', marginTop: '-10px', fontSize: '12px', color: '#7E7E7E' }}>Your password must be 8 character</p>

                        <div className='d-flex align-items-center justify-content-around' style={{ marginTop: '68px', marginLeft: '32px', }}>
                            <Link style={{ textDecoration: 'none' }} to='/singup2'> <p style={{ color: '#767676', fontSize: '15px', fontWeight: '600', }}>Back</p></Link>

                            <Link to='/attendance' > <button className='d-flex align-items-center justify-content-center' style={{ width: '100px', padding: '10px 20px ', borderRadius: '15px', gap: '10px', backgroundColor: '#1678CB', color: 'white', border: '1px solid #1678CB', }}>Sign Up</button></Link>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp3;