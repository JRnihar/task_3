import React from 'react';
import images1 from '../images/ultimate hrm logo-05-02 2.png'
import images2 from '../images/istockphoto-1321277096-612x612 1.png'
import { Link } from 'react-router-dom';
import './SignUp1.css'

const SignUp1 = () => {
    return (
        <div className='container '>
            <div className="row gx-5">
                <div className="col-lg-6 mt-5">
                    <Link to='/'><img className='mt-5 ms-5' src={images1} alt="" /></Link>
                    <img className='img-fluid' style={{ width: '612px', height: '437px' }} src={images2} alt="" />
                </div>
                <div className="col-lg-6 ml-10 py-10 mx-10" >
                    <div style={{ boxShadow: '1px -10px 25px rgba(201, 201, 201, 0.25', }}>
                        <h4 className='signup' >SignUp Form</h4>
                        <input className='input1' type="text" placeholder='Write First Name' />
                        <hr className='hr' />


                        <input className='input1' type="text" placeholder='Write Last Name' />
                        <hr className='hr' />


                        <Link to='/singup2'>  <button className='next d-flex align-items-center justify-content-center' style={{ width: '142px', height: '49px', padding: '10px 20px ', borderRadius: '15px', gap: '10px', backgroundColor: '#1678CB', color: 'white', border: '1px solid #1678CB', marginTop: '68px', marginLeft: '187px', }}>Next Step <i class="fa-solid fa-arrow-right "></i> </button></Link>

                        <div className='d-flex account' style={{ marginLeft: '201px', marginTop: '100px' }}>
                            <p style={{ color: '#7E7E7E', fontSize: '15px' }}>Already have an accont? </p>
                            <Link to='/login'> <p style={{ color: '#1678CB', fontSize: '15px', fontWeight: '600', textDecoration: 'underline', marginLeft: '10px' }}>LOGIN HERE</p></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp1;