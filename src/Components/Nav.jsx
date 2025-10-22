import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import userImg from '../assets/user.png'
import { Link, NavLink } from 'react-router';

const Nav = () => {

    const {user, logOut} = use(AuthContext)
    // console.log(user)

    const handleeSignOut = () =>{
        // console.log('logout')
        logOut()
            .then(()=>{
                alert('Your Logged Out Successfully')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
              <div className='flex justify-between md:flex-row flex-col items-center md:pt-10'>
            <div className=''>
                {user && user.email}
            </div>
            <div className='nav flex items-center text-base text-accent gap-5 md:my-0 my-5'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/myProfile'}>MyProfile</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img src={`${user ? user.photoURL : userImg}`} alt={userImg} className='w-20 rounded-full' />
                {user ? (
                    <button onClick={handleeSignOut} className='btn btn-primary px-8'>Sign Out</button>
                    ) : (
                    <Link to={`/signin`} className='btn btn-primary px-8'>Sign In</Link>
                )}
                
            </div>
        </div>
        </div>
    );
};

export default Nav;