import React, { useEffect } from 'react'
import './page404.scss'
import { clearToasts } from 'react-simple-toasts';

const Page404 = () => {

    useEffect(() => {
        clearToasts();
    }, []);

    return (
        <div className='page404'>
            <h1>Page Not Found</h1>
        </div>
    )
}

export default Page404
