import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import { StyledStory } from '../../../styled-app';
import { ProjectIntro, IProjectIntroProps, IBanner, IMaintainer } from '../../an-intro';
import { ISocialShare } from '@react-pakistan/react-commons-collection/commons/social-share';

const stories = storiesOf('an-intro/', module);

export const socialIcons : Array<ISocialShare> = [
  {
    id: 'social-icon-1',
    serviceName: 'facebook',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-2',
    serviceName: 'twitter',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-3',
    serviceName: 'telegram',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-4',
    serviceName: 'whatsapp',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-5',
    serviceName: 'linkedin',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-6',
    serviceName: 'pinterest',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-7',
    serviceName: 'vk',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-8',
    serviceName: 'ok',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-9',
    serviceName: 'reddit',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-10',
    serviceName: 'tumblr',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-11',
    serviceName: 'livejournal',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-12',
    serviceName: 'mailru',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },

  {
    id: 'social-icon-13',
    serviceName: 'viber',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-14',
    serviceName: 'workplace',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-15',
    serviceName: 'line',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-16',
    serviceName: 'pocket',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-17',
    serviceName: 'instapaper',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
  {
    id: 'social-icon-18',
    serviceName: 'email',
    shareUrl: 'https://taimoormk.github.io/react-commons-collection',
    size: 32,
    round: true,
    borderRadius: '50%',
  },
];

const banners : Array<IBanner> = [
  {
    id: 'banner-1',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-commons-collection.jpg',
    alt: 'React Pakistan - React Commons Collection',
    url: 'https://taimoormk.github.io/react-commons-collection',
  },
  {
    id: 'banner-2',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1566265693/GitHub/react-ui-collection.jpg',
    alt: 'React Pakistan - React UI Collection',
    url: 'https://taimoormk.github.io/react-ui-collection',
  },
  {
    id: 'banner-3',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499955/GitHub/react-icons-collection.jpg',
    alt: 'React Pakistan - React Icon Collection',
    url: '#',
  },
  {
    id: 'banner-4',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499957/GitHub/react-logo-collection.jpg',
    alt: 'React Pakistan - React Logo Collection',
    url: '#',
  },
  {
    id: 'banner-5',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499949/GitHub/react-image-collection.jpg',
    alt: 'React Pakistan - React Image Collection',
    url: '#',
  },
  {
    id: 'banner-6',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499951/GitHub/react-audio-collection.jpg',
    alt: 'React Pakistan - React Audio Collection',
    url: '#',
  },
  {
    id: 'banner-7',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499950/GitHub/react-video-collection.jpg',
    alt: 'React Pakistan - React Video Collection',
    url: '#',
  },
  {
    id: 'banner-8',
    imageUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1567499950/GitHub/react-design-collection.jpg',
    alt: 'React Pakistan - React Design Collection',
    url: '#',
  },
];

const maintainers : Array<IMaintainer> = [
  {
    id: 'maintainers-list-1',
    name: 'Taimoor Khan',
    designation: 'Software Engineer',
    avatarUrl: 'https://res.cloudinary.com/dq6hflqwx/image/upload/v1549647485/taimoor-khan.jpg',
    twitter: '',
    medium: '',
    github: '',
    url: 'https://taimoor-khan.herokuapp.com',
  },
  {
    id: 'maintainers-list-2',
    name: 'Your Name',
    designation: 'Your Designation',
    avatarUrl: 'https://www.w3schools.com/w3images/avatar2.png',
    twitter: '',
    medium: '',
    github: '',
    url: '',
  }
];

export const socialIconsSet = socialIcons;

export const projectIntroProps = () : IProjectIntroProps => ({
  banners: array('banners', banners),
  maintainers: array('maintainers', maintainers),
  socialIcons: array('socialIcons', socialIconsSet),
});

stories.add(
  'AnIntro',
  () => (
    <StyledStory>
      <ProjectIntro {...projectIntroProps()} />
    </StyledStory>
  ),
);
