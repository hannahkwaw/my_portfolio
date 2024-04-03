import React from 'react';
import {PiSealCheckFill} from 'react-icons/pi'
const Experience = () => {
    return (
        <div className="flex justify-center ">
        <div className="mt-32 text-black  w-2/3 self-center align-baseline">
            <p className="font- text-center">Explore my</p>
            <p className="font-bold text-5xl text-center mt-2">Experience</p>
            <div className="border border-gray-300 px-10 py-4 h-96 w-1/2 rounded-2xl">
                <p className="text-center font-bold text-gray-400">FrontEnd Development</p>
                <div className="flex-col w-full">
                    <div className="flex self-center border w-auto">
                        <PiSealCheckFill size={30} className="self-center mr-3"/>
                        <div className="text-xl">
                            <p className="font-bold">HTML</p>    
                            <p className="font-medium text-gray-400">Experienced</p> 
                        </div>        
                    </div> 
                    <div className="flex self-center border w-auto">
                        <PiSealCheckFill size={30} className="self-center mr-3"/>
                        <div className="text-xl">
                            <p className="font-bold">HTML</p>    
                            <p className="font-medium text-gray-400">Experienced</p> 
                        </div>        
                    </div>    
                    <div className="flex self-center border w-auto">
                        <PiSealCheckFill size={30} className="self-center mr-3"/>
                        <div className="text-xl">
                            <p className="font-bold">HTML</p>    
                            <p className="font-medium text-gray-400">Experienced</p> 
                        </div>        
                    </div> 
                </div>
            </div>
        </div>
    </div>
    );
};

export default Experience;