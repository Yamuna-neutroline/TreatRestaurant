import React from 'react';
import { infoObjOne, infoObjTwo } from './Data';
import InfoSection from './InfoSection';

const Aboutus = () => {
  return (
    <>
   <InfoSection {...infoObjTwo} />
    <InfoSection {...infoObjOne} />
    </>
  );
};

export default Aboutus;
