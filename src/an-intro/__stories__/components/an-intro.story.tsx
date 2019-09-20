import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';
import { StyledStory } from '../../../styled-app';
import { ProjectIntro, IProjectIntroProps, IBanner, IMaintainer } from '../../an-intro';

const stories = storiesOf('an-intro/', module);

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

export const projectIntroProps = () : IProjectIntroProps => ({
  banners: object('banners', banners),
  maintainers: object('maintainers', maintainers),
});

stories.add(
  'AnIntro',
  () => (
    <StyledStory>
      <ProjectIntro {...projectIntroProps()} />
    </StyledStory>
  ),
);
