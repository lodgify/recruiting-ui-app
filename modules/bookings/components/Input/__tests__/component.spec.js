import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Input } from '../';

const mockOnChange = jest.fn();

const props = {
  onChange: mockOnChange,
  value: 'testValue',
  placeholder: 'testPlaceholder',
};

describe('Input component', () => {
  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it('should not render an icon', () => {
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(0);
  });

  it('should render an icon when one is passed as parameter', () => {
    const wrapper = shallow(<Input {...props} icon={faSearch} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(1);
  });

  it('should show the passed in placeholder', () => {
    const wrapper = mount(<Input {...props} />);
    expect(wrapper.find('input').instance().placeholder).toBe(
      props.placeholder,
    );
  });

  it('should have the passed in value ', () => {
    const wrapper = mount(<Input {...props} />);
    expect(wrapper.find('input').instance().value).toBe(props.value);
  });

  it('should call its onChange callback', () => {
    const wrapper = shallow(<Input {...props} />);
    const event = { target: { value: 'someValue' } };
    wrapper.find('input').simulate('change', event);
    expect(mockOnChange).toHaveBeenCalled();
  });
});
