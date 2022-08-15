import React, {memo} from 'react';

const Temp = ({list}) => {
    return (
        <div>
            {list.map(item => <div key={item}>{item}</div>)}
        </div>
    );
};

export default memo(Temp);