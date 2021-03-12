import { Link } from 'react-router-dom';
import { SmallWrapper, SmallLink } from './Styles';

const LinkModule = ({ text, linkTo, marginTop, marginLeft }) => {
  return (
    <SmallWrapper marginTop={marginTop} marginLeft={marginLeft}>
      <h3>
        or click
        <Link to={linkTo}>
          <SmallLink> here </SmallLink>
        </Link>{' '}
        to {text}
      </h3>
    </SmallWrapper>
  );
};

export default LinkModule;
