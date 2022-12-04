import React, { useState } from 'react';
import images1 from '../images/ultimate hrm logo-05-02 2.png'
import images2 from '../images/istockphoto-1321277096-612x612 1.png'
import { Link } from 'react-router-dom';
import swal from 'sweetalert2';

async function loginUser(credentials) {
    return fetch('https://test.nexisltd.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        console.log(response);
        if ('accessToken' in response) {
            swal("Success", response.message, "success", {
                buttons: false,
                timer: 2000,
            })
                .then((value) => {
                    localStorage.setItem('accessToken', response['accessToken']);
                    localStorage.setItem('user', JSON.stringify(response['user']));
                  
                });
        } else {
            swal("Failed", response.message, "error");
        }
    }
    return (
        <div className='container '>
            <div className="row gx-5">
                <div className="col-lg-6 mt-5">
                    <Link to='/'><img className='mt-5 ms-5' src={images1} alt="" /></Link>
                    <img className='img-fluid' src={images2} alt="" />
                </div>
                <div className="col-lg-6 ml-10 py-10 mx-10" >
                    <div style={{ boxShadow: '1px -10px 25px rgba(201, 201, 201, 0.25', }}>
                        <h4 className='signup'>Login Form</h4>
                        <form onSubmit={handleSubmit}>
                            <input onChange={e => setUserName(e.target.value)} className='input1' style={{ marginTop: '100px', marginLeft: '100px', border: '0px solid white' }} type="text" placeholder='Enter Email Address' />
                            <hr className='hr' />


                            <input className='input1' onChange={e => setPassword(e.target.value)} style={{ marginTop: '55px', marginLeft: '100px', border: '0px solid white' }} type="text" placeholder='Write Password' />
                            <hr className='hr' />
                            <p className='input1' style={{ marginLeft: '100px', marginTop: '-10px', fontSize: '12px', color: '#7E7E7E' }}>Your password must be 8 character</p>


                            <Link to='/attendance'><button className=' next d-flex align-items-center justify-content-center' type="submit" style={{ width: '142px', height: '49px', padding: '10px 20px ', borderRadius: '15px', gap: '10px', backgroundColor: '#1678CB', color: 'white', border: '1px solid #1678CB', marginTop: '68px', marginLeft: '187px', }}>Login </button></Link>
                        </form>

                        <div className='d-flex account' style={{ marginLeft: '201px', marginTop: '100px' }}>
                            <p style={{ color: '#7E7E7E', fontSize: '15px' }}>Don't have an accont? </p>
                            <Link to='/singup'> <p style={{ color: '#1678CB', fontSize: '15px', fontWeight: '600', textDecoration: 'underline', marginLeft: '10px' }}>SIGNUP  HERE</p></Link>
                        </div>

                    </div>
                </div >
            </div >
        </div >
    );
};

export default Login;