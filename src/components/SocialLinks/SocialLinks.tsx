import React, { Fragment } from 'react'
import styled from 'styled-components'

import * as SocialIcons from '../../icons/social'
import mediaqueries from '@styles/media'

const SocialLinks = ({ fill = 'white' }: { fill: string }) => (
  <Fragment>
    <SocialIconContainer
      target="_blank"
      rel="noopener"
      href="https://www.facebook.com/narative.co/"
    >
      <SocialIcons.FacebookIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer
      target="_blank"
      rel="noopener"
      href="https://twitter.com/narative_co"
    >
      <SocialIcons.TwitterIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer
      target="_blank"
      rel="noopener"
      href="https://www.instagram.com/narative.co/"
    >
      <SocialIcons.InstagramIcon fill={fill} />
    </SocialIconContainer>
    <SocialIconContainer
      target="_blank"
      rel="noopener"
      href="https://www.linkedin.com/company/narative/"
    >
      <SocialIcons.LinkedinIcon fill={fill} />
    </SocialIconContainer>
  </Fragment>
)

export default SocialLinks

const SocialIconContainer = styled.a`
  margin-left: 3.2rem;
  text-decoration: none;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  ${mediaqueries.tablet`
    margin: 0 1.6rem;
  `};
`