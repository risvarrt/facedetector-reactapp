import React from 'react';

const Rank = ({name, entries}) =>{
    return (
        <div className='yellow'>
        {`${name} , your current rank is...`}
            <div className='white f3'>
                #{entries}
            </div>
            <div className='white f3'>

            </div>
        </div>
    );
}

export default Rank;