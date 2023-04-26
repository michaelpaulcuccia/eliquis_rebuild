import React from 'react';
import Container from './Container';
import Nav from './Nav';

export default function PageLayout({children}) {
  return (
    <>
        <Nav/>
        <Container>
            {children}
        </Container>
    </>
  )
}
