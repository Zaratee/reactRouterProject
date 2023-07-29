import React from 'react'
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className='w-[100vw] h-[100vh] flex items-center justify-center'>
            <div className="bg-slate-50 shadow-xl rounded-sm flex flex-col items-center justify-center p-5 text-slate-800 gap-1">
                <h1 className='text-4xl font-bold'>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>)
}


export default ErrorPage


