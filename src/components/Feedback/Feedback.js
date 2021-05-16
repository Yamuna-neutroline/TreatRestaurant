import React from 'react';
import profilepicture1 from '../../assets/images/profilepicture1.jpg'
import profilepicture2 from '../../assets/images/profilepicture2.jpg'
import profilepicture3 from '../../assets/images/profilepicture3.jpg'
import { IconContext } from 'react-icons/lib';
import {
  FeedbackSection,
  FeedbackWrapper,
  FeedbackHeading,
  FeedbackContainer,
  FeedbackCard,
  FeedbackCardInfo,
  FeedbackCardIcon,
  FeedbackCardPerson,
  FeedbackGiverProfilePic
} from './Feedback.elements';

function Feedback() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <FeedbackSection>
        <FeedbackWrapper>
          <FeedbackHeading>Feedbacks</FeedbackHeading>
          <FeedbackContainer>
            <FeedbackCard>
              <FeedbackCardInfo>
                <FeedbackCardIcon>
                  <FeedbackGiverProfilePic src = {profilepicture1}>
                  </FeedbackGiverProfilePic>
                </FeedbackCardIcon>
                <FeedbackCardPerson>
              Joe Bill
            </FeedbackCardPerson>
            It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.
              </FeedbackCardInfo>
            </FeedbackCard>
            <FeedbackCard>
              <FeedbackCardInfo>
                <FeedbackCardIcon>
                  <FeedbackGiverProfilePic src = {profilepicture2}>
                  </FeedbackGiverProfilePic>
                </FeedbackCardIcon>
                <FeedbackCardPerson>
              Evelyn Manson
            </FeedbackCardPerson>
            This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.
              </FeedbackCardInfo>
            </FeedbackCard>
            <FeedbackCard to='/sign-up'>
              <FeedbackCardInfo>
                <FeedbackCardIcon>
                  <FeedbackGiverProfilePic src = {profilepicture3}>
                  </FeedbackGiverProfilePic>
                </FeedbackCardIcon>
                <FeedbackCardPerson>
              Adam Gill
            </FeedbackCardPerson>
            This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it.
              </FeedbackCardInfo>
            </FeedbackCard>
          </FeedbackContainer>
        </FeedbackWrapper>
      </FeedbackSection>
    </IconContext.Provider>
  );
}
export default Feedback;
