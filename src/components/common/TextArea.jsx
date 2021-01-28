import React from 'react';

const TextArea = ({placeholder, onSubmit}) => {
    const handleSubmit = e => {
        if (e.key === 'Enter') {
            onSubmit(e.target.value);
            e.target.value = null;
        }
    }


    return (
        <textarea placeholder={placeholder} onKeyDown={handleSubmit}></textarea>
    );
}
 
export default TextArea;