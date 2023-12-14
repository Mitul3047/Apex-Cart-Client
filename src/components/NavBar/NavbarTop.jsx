

import { useState } from 'react';

const NavbarTop = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className='fixed z-20 bg-amber-400 w-full py-4 '>
            <h1 className='cursor-pointer text-base uppercase font-semibold italic text-center mb-4 text-black underline' onClick={toggleDropdown}>Free Shippin On All Orders</h1>
            {showDropdown && (


                    <div>

                        <div className='flex gap-4 justify-evenly items-center'>
                            <img className='w-1/2 h-[70vh] ' src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='text-center text-black text-3xl font-bold space-y-8'>

                                <h3 className=' '>buy maskura smart hoop at <br />£𝟏𝟎.99</h3>
                                <p>
                                    Shop At Maskura,<br />
                                    Get All Trendy Products <br />
                                    "Be Maskura Fit"

                                </p>
                               <p className='text-sm'> **Free Shipping Available. Conditions Apply</p>
                            </div>
                        </div>
                    </div>

            )}
        </div>
    );
};

export default NavbarTop;
