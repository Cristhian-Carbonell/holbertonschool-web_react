import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';
import NotificationsItem from './NotificationItem';

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3,  type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
];

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

  describe('listNotifications is empty', () => {
    it('renders correctly if empty array is passed / prop not specified', () => {
      const wrapper = shallow(<Notifications />);
      const notifs = wrapper.find(NotificationItem);

      expect(notifs.length).toEqual(0);
    });

});

describe('listNotifications is not empty', () => {
    const testNotifs = [
      { id: 0, type: 'default', value: 'New project available' },
      {
        id: 1,
        type: 'urgent',
        html: { __html: '<strong>Project Deadline Approaching</strong>' }
      }
    ];

    const wrapper = shallow(
      <Notifications listNotifications={testNotifs} displayDrawer={true} />
    );
    const notifs = wrapper.find(NotificationItem);

    it('renders correct amount of notifications', () => {
        expect(notifs.length).toEqual(2);
    });
});


describe('message displays properly', () => {
    it('message displays properly', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        const noNewNotifs = wrapper.find('.Notifications p');

        expect(noNewNotifs.length).toEqual(1);
        expect(noNewNotifs.text()).toEqual('No new notifications for now');
  });
});
