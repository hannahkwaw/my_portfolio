import React from 'react';
import { PiSealCheckFill } from 'react-icons/pi';

interface SkillProp{
    name: string
    level: string
}
const Skill = ({name, level}: SkillProp) => {
    return (
        <div className="flex self-center w-auto">
            <PiSealCheckFill size={30} className="self-center mr-3"/>
            <div className="text-xl">
                <p className="font-bold">{name}</p>    
                <p className="font-medium text-gray-400">{level}</p> 
            </div>
        </div>
    );
};

export default Skill;