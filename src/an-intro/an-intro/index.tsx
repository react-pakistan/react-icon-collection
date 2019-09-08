import React from 'react';
import { IconMobileUiGrey3 } from '../../icons/mobile-ui-grey';
import { ProjectIntroContainer, ProjectHeadingContainer, MaintainerHeadingContainer } from './styles';
import { Grid } from '@react-pakistan/react-commons-collection/commons/grid';
import { Image } from '@react-pakistan/react-commons-collection/commons/image';
import { H3 } from '@react-pakistan/react-commons-collection/commons/h3';
import { H4 } from '@react-pakistan/react-commons-collection/commons/h4';
import { H5 } from '@react-pakistan/react-commons-collection/commons/h5';
import { Spacer } from '@react-pakistan/react-commons-collection/commons/spacer';
import { BackgroundImage } from '@react-pakistan/react-commons-collection/commons/background-image';
import { Text } from '@react-pakistan/react-commons-collection/commons/text';
import { A } from '@react-pakistan/react-commons-collection/commons/a';
import { SocialShare, ISocialShare } from '@react-pakistan/react-commons-collection/commons/social-share';
import { theme } from '../../theme';

export const ProjectIntro = ({
  banners,
  maintainers,
  socialIcons,
} : IProjectIntroProps) : JSX.Element => (
  <ProjectIntroContainer>
    <Grid
      gridColumn="1fr 1fr"
    >
      <Image
        imageUrl="
          https://res.cloudinary.com/dq6hflqwx/image/upload/v1565548545/GitHub/React_Pakistan_Storybook_Logo.jpg"
        alt="React Pakistan Logo"
        margin="0"
        padding="0"
        width="100%"
        height="auto"
      />
      <ProjectHeadingContainer backgroundColor={theme.lighterBlack}>
        <H3
          fontFamily="Montserrat"
          fontSize="1.6em"
          fontWeight={700}
          lineHeight="normal"
          letterSpacing="1px"
          textAlign="left"
          textTransform="uppercase"
          color="#2E2E2E"
        >
          This project is released under ReactPakistan platform.
        </H3>
        <Spacer margin="1em 0" />
        <H5
          fontFamily="Montserrat"
          fontSize="1.2em"
          fontWeight={500}
          lineHeight="normal"
          letterSpacing="1px"
          textAlign="left"
          textTransform="normal"
          color="#2E2E2E"
        >
          React Pakistan is an OpenSource & Free Software (FOSS) platform,
          creating React software solutions for the global community.
        </H5>
        <Spacer margin="1em 0" />
        <A
          href="https://www.buymeacoffee.com/60whp8FM3"
          target="_blank"
        >
          <Image
            imageUrl="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png"
            alt="Buy Me A Coffee"
            margin="0"
            padding="0"
            width="auto"
            height="auto"
          />
        </A>
      </ProjectHeadingContainer>
    </Grid>
    <Grid
      gridColumn="1fr 1fr"
    >
      {banners.map((banner : IBanner) : JSX.Element => (
        <A
          key={banner.id}
          href={banner.url}
          target="_blank"
        >
          <Image
            imageUrl={banner.imageUrl}
            alt={banner.alt}
            margin="0"
            padding="0"
            width="100%"
            height="auto"
          />
        </A>
      ))}
    </Grid>
    <Spacer margin="1em 0" />
    <H4
      fontFamily="Montserrat"
      fontSize="1.4em"
      fontWeight={700}
      lineHeight="normal"
      letterSpacing="1px"
      textAlign="center"
      textTransform="uppercase"
      color="#2E2E2E"
    >
      Project Maintainer's List
    </H4>
    <Spacer margin="2em 0" />
      <Grid
        gridColumn="auto auto"
        columnGap="1em"
        justifyItems="center"
      >
        {maintainers.map((maintainer : IMaintainer) : JSX.Element => (
          <Grid
            key={maintainer.id}
            gridColumn="auto 1fr"
            columnGap="1em"
          >
            <BackgroundImage
              imageBackgroundMargin="0"
              imageBackgroundPadding="0"
              imageBackgroundWidth="100px"
              imageBackgroundHeight="100px"
              imageBackgroundColor="#6C6C6C"
              imageBackgroundUrl={maintainer.avatarUrl}
              imageBackgroundRepeat="no-repeat"
              imageBackgroundPosition="center center"
              imageBackgroundSize="cover"
              imageBorderRadius="50%"
            />
            <MaintainerHeadingContainer>
              <H5
                fontFamily="Montserrat"
                fontSize="1.2em"
                fontWeight={700}
                lineHeight="normal"
                letterSpacing="1px"
                textAlign="left"
                textTransform="uppercase"
                color="#2E2E2E"
              >
                {maintainer.name}
              </H5>
              <Spacer margin="0.5em 0em"/>
              <Text
                fontFamily="Montserrat"
                fontSize="1em"
                fontWeight={400}
                lineHeight={0.8}
                letterSpacing="1px"
                textAlign="left"
                textTransform="none"
                textDecoration="none"
                color="#2E2E2E"
              >
                {maintainer.designation}
              </Text>
              <Spacer margin="0.5em 0em"/>
              {maintainer.url && (<A
                href={maintainer.url}
                target="_blank"
              >
                <IconMobileUiGrey3
                  fontSize="32px"
                  color="#2E2E2E"
                />
              </A>
              )}
            </MaintainerHeadingContainer>
          </Grid>
        ))}
      </Grid>
      <Spacer margin="1em 0" />
      <SocialShare
        socialIcons={socialIcons}
      />
  </ProjectIntroContainer>
);

export interface IBanner {
  [key : string] : string;
}

export interface IMaintainer {
  [key : string] : string;
}

export interface IProjectIntroProps {
  /**
   *
   */
  banners : Array<IBanner>;
  /**
   *
   */
  maintainers : Array<IMaintainer>;
  /**
   *
   */
  socialIcons : Array<ISocialShare>;
}
