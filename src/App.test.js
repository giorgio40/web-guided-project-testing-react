import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Renders without errors', ()=> {
    render(<App/>);
});

test('Renders mission data when button is clicked', ()=> {
    //Arrange: render app
    //Act: get data from api? and push button
    //Assert: We should get the same amount of missions as our api returned.
});