import { mount } from 'enzyme';

import { mockBooking } from '../../../testUtils';
import { ListItem } from '../../ListItem';
import { List } from '../';

const mockOnClick = jest.fn();

const props = {
  items: [mockBooking(1), mockBooking(2), mockBooking(3)],
  listHeight: 300,
  itemHeight: 100,
  onClick: mockOnClick,
};

describe('List component', () => {
  it('should render the passed in items if they fit in screen', () => {
    const wrapper = mount(<List {...props} />);
    expect(wrapper.find(ListItem)).toHaveLength(props.items.length);
  });

  it('should not render all the passed in items if they do not fit in screen', () => {
    const items = [...Array(50)].map((val, i) => mockBooking(i));
    const wrapper = mount(<List {...props} items={items} />);
    expect(wrapper.find(ListItem).length).toBeLessThan(items.length);
  });
});
