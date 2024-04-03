import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className=" mt-10 p-5  flex justify-between text-black">
                <h3>Hannah Kwaw</h3>
                <ul className="flex justify-evenly w-1/3">
                    <li className="pr-10">About</li>
                    <li className="pr-10">Experience</li>
                    <li className="pr-10">Projects</li>
                    <li className="pr-10">Contact</li>
                </ul>
            </nav>

        </div>
    );
};

export default Header;