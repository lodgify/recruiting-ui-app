import { Icon } from './styled';
import { string, oneOf } from 'prop-types';

export const MaterialIcon = ({ name, color, size, align, ...rest }) => (
  <Icon className={'material-icons'} color={color} size={size} align={align} {...rest}>
    {name}
  </Icon>
);

MaterialIcon.propTypes = {
  name: string.isRequired,
  color: string,
  size: oneOf(['tiny', 'small', 'medium', 'large']),
  align: oneOf(['left', 'center', 'right']),
};
