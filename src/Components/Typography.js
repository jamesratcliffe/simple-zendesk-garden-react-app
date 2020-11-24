import styled from 'styled-components';
import {XXL} from '@zendeskgarden/react-typography';

const Header = styled(XXL)`
  margin-bottom: ${props => props.theme.space.md};
`;

exports.Header = Header;
