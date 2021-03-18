import { IconContainer } from './Styles';

const Icon = ({ handleClick, id }) => {
  return (
    <IconContainer className="delete-image" onClick={() => handleClick(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
      >
        <path d="M33,3.324,29.676,0,16.5,13.176,3.324,0,0,3.324,13.176,16.5,0,29.676,3.324,33,16.5,19.824,29.676,33,33,29.676,19.824,16.5Z" />
      </svg>
    </IconContainer>
  );
};

export default Icon;
