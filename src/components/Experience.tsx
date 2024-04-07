import React from 'react';
import {PiSealCheckFill} from 'react-icons/pi'
import Skill from './Skill';
const Experience  = () => {
    return (
        <div className="flex justify-center ">
        <div className="mt-32 text-black  w-2/3 self-center align-baseline">
            <p className="font- text-center">Explore my</p>
            <p className="font-bold text-5xl text-center mt-2">Experience</p>
            <div className="flex">
                <div className="border border-gray-300 px-10 py-4 h-96 w-1/2 rounded-2xl">
                    <p className="text-center text-2xl font-bold text-gray-400">FrontEnd Development</p>
                    <div className="w-full flex just mt-">
                        <div className="w-1/2">
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>    
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>    
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-300 px-10 py-4 h-96 w-1/2 rounded-2xl">
                    <p className="text-center text-2xl font-bold text-gray-400">Backend Development</p>
                    <div className="w-full flex just mt-">
                        <div className="w-1/2">
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>    
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>    
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div> 
                            <div className="mt-6">
                                <Skill name={"HTML"} level={"Experience"}/>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Experience;