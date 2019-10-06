import { shallow } from 'enzyme';

import { Button } from '../';

const mockOnClick = jest.fn();

const props = {
  onClick: mockOnClick,
};

describe('Button component', () => {
  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('should render its children', () => {
    const wrapper = shallow(
      <Button {...props}>
        <span className="findme" />
      </Button>,
    );
    expect(wrapper.find('.findme')).toHaveLength(1);
  });

  it('should call its onClick callback', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should be rendered with solid style when passed the solid prop', () => {
    const wrapper = shallow(<Button {...props} solid />);
    expect(wrapper.hasClass('solid')).toBe(true);
  });
});
