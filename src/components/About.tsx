import Image from 'next/image';
import React from 'react';
import profileImage from '../img/profile-image.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
    return (
        <div className="flex justify-center ">
            <div className="mt-32 text-black  w-2/3 self-center align-baseline">
                <p className="font- text-center">Get to know more a</p>
                <p className="font-bold text-5xl text-center mt-2">About me</p>
                <div className="mt-16 flex  ">
                    <Image src={profileImage} width={400} height={400} alt="about" className="rounded-3xl" />
                    <div>
                        <div className="ml-32 flex">
                            <div className="border border-black rounded-xl px-24 py-8 text-center alig leading-6">
                                <div className="flex justify-center">
                                    <FaAward size={30} color="gray"/>
                                </div>
                                <p className="font-bold text-xl">Experience</p>
                                <p className="font-bold text-gray-500">2+ years</p>
                                <p className="font-bold text-gray-500">Software Developer</p>
                            </div>
                            <div className="border border-black rounded-xl px-24 py-8 text-center leading-6">
                                <div className="flex justify-center">
                                    <FaAward size={30} color="gray"/>
                                </div>
                                <p className="font-bold text-xl">Education</p>
                                <p className="font-bold text-gray-500">BSc. Computer Science</p>
                                {/* <p className="font-bold text-gray-500">Software Developer</p> */}
                            </div>
                        </div>
                        <div className="ml-32 mt-10rounded-xl  py-8 leading-6">
                            <p>
                                ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;