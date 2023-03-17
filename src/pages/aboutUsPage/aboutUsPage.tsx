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

function AboutUsPage() {
  return (
    <PageContainer>
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
          <a href="https://rs.school/">© RSSchool 2023</a>
        </p>
      </>
    </PageContainer>
  );
}

export default AboutUsPage;
