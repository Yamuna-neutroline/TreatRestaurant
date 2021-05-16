import React from 'react';
//import { Link } from 'react-router-dom';
import { Container} from '../../globalStyles';
import foodpic1 from "../../assets/images/food1.jpg";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

function InfoSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                {/* <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine> */}
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {/* <Link to='/sign-up'> */}
                  {/* <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button> */}
                {/* </Link> */}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src= {foodpic1} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}
 export default InfoSection;