import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// it('shows a comment box', () => {
//     const div = document.createElement('div');

//     ReactDOM.render(<App />, div);
//     // console.log(div.innerHTML);
//     expect(div.innerHTML).toContain('Comment Box');

//     ReactDOM.unmountComponentAtNode(div);
// });

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows a comment box', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length).toEqual(1);
})
