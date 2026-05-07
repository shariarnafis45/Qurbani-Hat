
import LoginForm from '@/components/auth/LoginForm';
import React from 'react';

const SignInPage = () => {
    return (
        <div className='bg-slate-100 py-15 flex justify-center items-center'>
            <div className=' '>
                <LoginForm/>
            </div>
        </div>
    );
};

export default SignInPage;