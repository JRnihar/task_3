import React from 'react';
import { Link } from 'react-router-dom';
import images1 from '../images/ultimate hrm logo-05-02 2.png'

const Attendance = () => {
    return (
        <div>
            <Link to='/'><img className='mt-5 ms-5' src={images1} alt="" /></Link>
            <p className=' attendance'>Attendance information</p>
            <div className="container mx-auto">
                <div className="row mt-5 mx-5">
                    <div className="col-lg-4">
                        <p style={{ fontWeight: '600' }}>Date</p>
                        <p className='mt-4'>11/7/16</p>
                        <p className='mt-4'>2/11/12</p>
                        <p className='mt-4'>4/21/12</p>
                        <p className='mt-4'>8/15/17</p>
                        <p className='mt-4'>6/19/14</p>
                        <p className='mt-4'>2/19/21</p>
                        <p className='mt-4'>5/19/12</p>

                    </div>
                    <div className="col-lg-4">
                        <p style={{ fontWeight: '600' }}>Employee Name</p>


                        <p className='mt-4'>Eleanor Pena</p>
                        <p className='mt-4'>Wade Warren</p>
                        <p className='mt-4'>Jacob Jones</p>
                        <p className='mt-4'>Darlene Robertson</p>
                        <p className='mt-4'>Floyd Miles</p>
                        <p className='mt-4'>Ralph Edwards</p>
                        <p className='mt-4'>Leslie Alexander</p>

                    </div>
                    <div className="col-lg-4">
                        <p style={{ fontWeight: '600' }}>Status</p>

                        <p className='mt-4'>Present</p>
                        <p className='mt-4'>Present</p>
                        <p className='mt-4'>Present</p>
                        <p className='mt-4'>Present</p>
                        <p className='mt-4'>Present</p>
                        <p className='mt-4'>Present</p>
                        <p className='mt-4'>Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;