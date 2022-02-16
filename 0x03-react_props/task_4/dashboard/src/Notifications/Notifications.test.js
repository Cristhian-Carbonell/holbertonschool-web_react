import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('Notifications', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.exists());
    });
    it("Test n°2", () => {
      const wrapper = shallow(<Notifications />);
      wrapper.update();
      expect(wrapper.find("li")).toHaveLength(0);
    });
    it("Test n°3", () => {
      const wrapper = shallow(<Notifications />);
      wrapper.update();
      expect(wrapper.find("p").text()).toEqual('Here is the list of notifications');
    });
  });

  describe('Notifications check that the menu item is being displayed', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    it('when displayDrawer is false', () => {
      const menuItem = wrapper.find('menuItem');
      expect(menuItem.length).toEqual(0);
      expect(wrapper.exists());
    });
    it("Add a check that the div.Notifications is not being displayed when displayDrawer is false", () => {
      expect(wrapper.find('div.Notifications').length).toEqual(0);
    });
  });
  describe('Notifications check that the menu item is being displayed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    it('when displayDrawer is true', () => {
      const menuItem = wrapper.find('menuItem');
      expect(menuItem.length).toEqual(0);
      expect(wrapper.exists());
    });
    it("Add a check that the div.Notifications is not being displayed when displayDrawer is false", () => {
      expect(wrapper.find('div.Notifications').length).toEqual(1);
    });
  });