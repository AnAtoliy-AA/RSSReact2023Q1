import color from '@utils/styles/stylesUtils';
import styled from 'styled-components';

const Center = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IWaveProps {
  delay: number;
}

const Wave = styled.div<IWaveProps>`
  width: 5px;
  height: 20px;
  background: linear-gradient(
    45deg,
    ${color('primary.wave_animation_start')},
    ${color('primary.wave_animation_end')}
  );
  margin: 10px;
  animation: wave 1s linear infinite;
  border-radius: 20px;
  animation-delay: ${(props) => props.delay}s;

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;

const DEFAULT_WAVES_NUMBER = 10;

interface IWaveAnimationProps {
  wavesNumber?: number;
}

function WaveAnimation({ wavesNumber = DEFAULT_WAVES_NUMBER }: IWaveAnimationProps) {
  return (
    <Center>
      {Array.from({ length: wavesNumber }, (_, i) => (
        <Wave key={i} delay={i / wavesNumber} />
      ))}
    </Center>
  );
}

WaveAnimation.defaultProps = {
  wavesNumber: DEFAULT_WAVES_NUMBER,
};

export default WaveAnimation;
