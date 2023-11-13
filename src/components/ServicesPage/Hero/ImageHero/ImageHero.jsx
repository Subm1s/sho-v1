import React from 'react';
import s from './ImageHero.module.css';

const ImageHero = ({ heroImage}) => {
    return (
        <img src={heroImage} alt="дівчина з книгою в галереї" className={s.image } />
    );
};

export default ImageHero;