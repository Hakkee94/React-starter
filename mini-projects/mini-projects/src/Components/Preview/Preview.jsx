import React from 'react';

const Preview = ({preview, setPreview}) => {
    return (
        <div className='preview-list'>
            {preview.map((item, index) => {
                return <div className='preview' key={Date.now()}>
                    <div onClick={() => {
                        setPreview(prev => {
                            return prev.filter((item, key) => key !== index)
                        })
                    }} className='delete-btn'>X
                    </div>
                    <img src={item} key={index + 1}/></div>
            })}
        </div>
    );
};

export default Preview;