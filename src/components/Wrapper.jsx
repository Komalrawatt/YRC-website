import React from 'react';
import { teamData } from '../../gallerydata';
import Photowrap from './Photowrap';



const Wrapper = () => {
    return (
        <div>
            {Object.keys(teamData).map((key) => (
                <div key={key}>
                    <h2>{key}</h2>
                    <div>
                        {teamData[key].map((member, index) => (
                            <Photowrap key={index} values={member} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Wrapper;
