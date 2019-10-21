import { shallow, mount } from 'enzyme';

import { Input } from '../../Input';
import { SearchBar } from '../';

const mockOnSearch = jest.fn();

const props = {
  onSearch: mockOnSearch,
  searchTerm: 'testSearch',
};

describe('SearchBar component', () => {
  it('should call the onSearch callback just once', () => {
    const wrapper = shallow(<SearchBar {...props} />);

    wrapper.find(Input).invoke('onChange', 'value');
    wrapper.find(Input).invoke('onChange', 'other value');
    wrapper.find(Input).invoke('onChange', 'some other value');
    expect(mockOnSearch).not.toBeCalled();

    setTimeout(() => {
      expect(mockOnSearch).toHaveBeenCalledTimes(1);
      expect(mockOnSearch).toHaveBeenCalledWith('some other value');
    }, 300);
  });
});
