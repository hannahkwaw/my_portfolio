import React from 'react';
import Image from 'next/image';
import profileImage from '../img/profile-image.jpg'

const Profile = () => {
    return (
        <div className="flex justify-center pt-10">
            <Image src={profileImage} alt={'profile'} width={400} height={400} className="rounded-full" />
            <div className="w-1/4 h-32 self-center text-center leading-9 text-black">
                <p>Hi there, I am</p>
                <h3 className="font-bold text-5xl">Hannah Kwaw</h3>
                <h3 className="text-gray-500 font-bold text-2xl mt-4">Software Developer</h3>
                <div className="flex justify-center mt-4">
                    <button className="border border-black-100 p-4 mr-6 rounded-full">Download CV</button>
                    <button className="bg-white text-black p-4 rounded-full ">Contact Info</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;