import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showPrivateContactToast } from './PrivateToastFunctions/showPrivateContactToast';

const PrivateContactToast = ({ privateContactToast, setPrivateContactToast }) => {
    useEffect(() => {
        if (privateContactToast) {
            showPrivateContactToast(toast); 
        }
        setTimeout(() => {
            setPrivateContactToast(false);
        }, 4000);
    }, [privateContactToast]);

    return (
        <div>
        <ToastContainer
            position="bottom-center"
            autoClose={2000}
            limit={1}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover={false}
            theme="light"
        />
        </div>
    )
}

export default PrivateContactToast