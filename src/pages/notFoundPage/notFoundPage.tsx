import NotFoundImage from '@assets/images/404.png';
import styled from 'styled-components';

const StyledImage = styled.img`
  filter: grayscale();
  max-height: 80vh;
  padding-top: 2rem;
`;

function NotFoundPage() {
  return <StyledImage src={NotFoundImage} alt="NOT FOUND PAGE" />;
}

export default NotFoundPage;
