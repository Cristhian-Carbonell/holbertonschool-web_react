import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';


describe('Test App.js', () => {

  let events = {};

  beforeEach(() => {
    events = {}; // Empty our events before each test case
    // Define the addEventListener method with a Jest mock function
    document.addEventListener = jest.fn((event, callback) => {
      events[event] = callback;
    });
  });

  it('App without crashing', (done) => {
    expect(shallow(<App />).exists());
    done();
  });

  it('check that CourseList is not displayed when isLoggedIn is false', (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(0);
    done();
  });

  it('check that CourseList is displayed and Login is not displayed when isLoggedIn is true', (done) => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
    expect(wrapper.find(Login)).to.have.lengthOf(0);
    done();
  });

  it('verify that when the keys "control" and "h" are pressed the "logOut" function is called', (done) => {
    const logOut = jest.fn(() => void (0));
    shallow(<App />);
    window.alert = logOut;
    events.keydown({ keyCode: 72, ctrlKey: true });
    expect(logOut).toHaveBeenCalled()
    done();
  });
});