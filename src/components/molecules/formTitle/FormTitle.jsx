import React from 'react';
import cl from './formTitle.module.scss'
const FormTitle = ({ children }) => {
    return (
        <label className={cl.formTitle}>
            {children}
        </label>
    );
};

export default FormTitle;