import React from 'react';
import { infoObjOne, infoObjTwo } from './Data';
import InfoSection from './InfoSection';

const Aboutus = () => {
  return (
    <>
    <InfoSection {...infoObjOne} />
   <InfoSection {...infoObjTwo} />
    
    </>
  );
};

export default Aboutus;
