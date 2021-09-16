import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../App';

test('shows a comment box', ()=>{
    
    // render(<App/>);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();

    const div = document.createElement('div');
    ReactDOM.render(<App />, div);

    expect(div.innerHTML).toContain('Comment Box');
    // expect(div.innerHTML).toBeTruthy();

    ReactDOM.unmountComponentAtNode(div);
    
})