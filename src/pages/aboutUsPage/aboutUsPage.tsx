import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';
import GitHubLogo from '@assets/icons/github.svg';
import LinkedInLogo from '@assets/icons/linkedin.svg';

const PageContainer = styled.div`
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PageTitle = styled.h2`
  color: ${color('neutral.title')};
  text-align: center;
`;

function AboutUsPage() {
  return (
    <PageContainer>
      <PageTitle>ABOUT US</PageTitle>
      <>
        <p>Developed by: </p>
        <p>Anatoliy Aliaksandrau - Front End React Developer</p>
        <p>
          <a href="https://github.com/AnAtoliyAK">
            <img src={GitHubLogo} alt="GitHub Logo" title="Anantoliy Aliaksandrau Github" />
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/anatoliy-aliaksandrau/">
            <img src={LinkedInLogo} alt="LinkedIn Logo" title="Anantoliy Aliaksandrau LinkedIn" />
          </a>
        </p>
        <p>
          <a href="https://app.rs.school/registry/student">© RSSchool 2023</a>
        </p>
      </>
    </PageContainer>
  );
}

export default AboutUsPage;
