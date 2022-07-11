import React from 'react';
import './PhotoManager.css'
import Preview from "../Preview/Preview";
import {useState} from "react";

const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
        });

        fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
        });

        fileReader.readAsDataURL(file);
    });
}

const PhotoManager = () => {
    const [preview, setPreview] = useState([])


    const handleSelect = async (evt) => {
        const files = [...evt.target.files];
        const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
        console.log(urls)
        setPreview(prev => [...prev, ...urls])

        // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    }

    return (
        <div className='photo-manager'>
            <div className='upload-btn'>
                    <input type='file' className='upload' onChange={handleSelect} multiple="multiple"/>
            </div>

                <Preview preview={preview} setPreview={setPreview}/>
        </div>
    );
};

export default PhotoManager;