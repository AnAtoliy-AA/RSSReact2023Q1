import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

const PageTitle = styled.h2`
  color: ${color('neutral.title')};
  text-align: center;
`;

function AboutUsPage() {
  return <PageTitle>ABOUT US PAGE</PageTitle>;
}

export default AboutUsPage;
