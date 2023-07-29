import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className='  w-[100vw] h-[100vh] flex'>
            <div className='bg-slate-200 shadow-lg relative' id="sidebar">
                <div className="absolute flex bottom-0 p-3 justify-center bg-slate-50 w-full gap-2 shadow-xl border-t border-slate-300">
                    <img src="/logoRouter.png" alt="" className='w-[45px] h-[30px]' />
                    <h1 className='font-bold'>React Router</h1>
                </div>
                <div className=" p-3 w-[190px]">
                    <nav>
                        <ul className=' flex flex-col gap-2 mt-2'>
                            <li className=' w-full hover:bg-[#C75B5B] text-slate-700 text-center transition-all font-bold hover:text-slate-200 rounded'>
                                <Link className='w-full' to={`animal/cat`} >Cat</Link>
                            </li>
                            <li className='w-full hover:bg-[#C75B5B] text-slate-700 text-center transition-all font-bold hover:text-slate-200 rounded'>
                                <Link className='w-full' to={`animal/dog`}>Dog</Link>
                            </li>
                            <li className='w-full hover:bg-[#C75B5B] text-slate-700 text-center transition-all font-bold hover:text-slate-200 rounded'>
                                <Link className='w-full' to={`animal/duck`}>Duck</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div id="detail" className='w-full h-full'>
                <Outlet />
            </div>
        </div>
    )
}

export default Root