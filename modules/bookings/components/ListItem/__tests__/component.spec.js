import { shallow } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { mockBooking } from '../../../testUtils';
import { ListItem } from '../';
import { calculateNights, formatPaidAmount } from '../component';

const props = {
  item: mockBooking(1),
};

describe('calculateNights function', () => {
  it('should calculate the difference in days between two dates', () => {
    const date1 = new Date();
    const date2 = new Date().setDate(date1.getDate() + 1);
    expect(calculateNights(date1, date2)).toBe(1);
  });
});

describe('formatPaidAmount function', () => {
  it('should format a currency amount according to user locale and currency code', () => {
    expect(formatPaidAmount('EUR', 1000)).toBe('€1,000.00');
  });
});

describe('ListItem component', () => {
  it('should show if it has been replied', () => {
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper.find('.status').find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('should render the status circle with the appropriate class', () => {
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper.find('.statusCircle.booked')).toHaveLength(1);
  });

  it('should render the guest name', () => {
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper.find('.guestName').text()).toBe(props.item.guestName);
  });
});
