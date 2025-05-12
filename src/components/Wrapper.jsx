import React from 'react';
import { teamData } from '../../gallerydata';
import Photowrap from './Photowrap';

const Wrapper = () => {
    return (
        <div className='roboto '>
            {Object.keys(teamData).map((key) => (
                <div key={key} className='m-7'>
                    <h2 className='text-3xl text-[#E4002A] text-center mb-5'>{key}</h2>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {teamData[key].map((member, index) => (
                            <Photowrap key={index} values={member} role={member.role} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wrapper;
