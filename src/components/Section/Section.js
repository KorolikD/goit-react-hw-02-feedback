import React from 'react';
import { SectionTitle, Wraper } from 'components';

export const Section = ({ title, children }) => {
  return (
    <Wraper>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </Wraper>
  );
};
