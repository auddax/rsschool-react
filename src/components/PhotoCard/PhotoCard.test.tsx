import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoCard from './PhotoCard';
import { IPhoto } from '../../types/interfaces';

const photo: IPhoto = {
  alt_description: 'a pink plate with a single flower on it',
  blur_hash: 'L5M?VpMd~q$+58jZx[WB_No#DiRi',
  color: '#c0a6a6',
  created_at: '2023-04-06T09:11:23Z',
  current_user_collections: [],
  description: '',
  height: 5400,
  id: 'PfBvNnGIhmQ',
  liked_by_user: false,
  likes: 2,
  links: {
    self: 'https://api.unsplash.com/photos/PfBvNnGIhmQ',
    html: 'https://unsplash.com/photos/PfBvNnGIhmQ',
    download:
      'https://unsplash.com/photos/PfBvNnGIhmQ/download?i…nw0MzM2NjZ8MHwxfGFsbHwxfHx8fHx8Mnx8MTY4MTA1Mzc0Mw',
    download_location:
      'https://api.unsplash.com/photos/PfBvNnGIhmQ/downlo…nw0MzM2NjZ8MHwxfGFsbHwxfHx8fHx8Mnx8MTY4MTA1Mzc0Mw',
  },
  promoted_at: '2023-04-09T14:42:27Z',
  sponsorship: null,
  topic_submissions: {},
  updated_at: '2023-04-09T14:42:27Z',
  urls: {
    raw: 'https://images.unsplash.com/photo-1680771447988-94…fGFsbHwxfHx8fHx8Mnx8MTY4MTA1Mzc0Mw&ixlib=rb-4.0.3',
    full: 'https://images.unsplash.com/photo-1680771447988-94…HwxfHx8fHx8Mnx8MTY4MTA1Mzc0Mw&ixlib=rb-4.0.3&q=85',
    regular:
      'https://images.unsplash.com/photo-1680771447988-94…fHx8Mnx8MTY4MTA1Mzc0Mw&ixlib=rb-4.0.3&q=80&w=1080',
    small:
      'https://images.unsplash.com/photo-1680771447988-94…8fHx8Mnx8MTY4MTA1Mzc0Mw&ixlib=rb-4.0.3&q=80&w=400',
    small_s3:
      'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1680771447988-94c040d9868b',
    thumb:
      'https://images.unsplash.com/photo-1680771447988-94…8fHx8Mnx8MTY4MTA1Mzc0Mw&ixlib=rb-4.0.3&q=80&w=200',
  },
  user: {
    id: 'kVsHbbKSThA',
    updated_at: '2023-04-09T14:42:27Z',
    username: 'foodism360',
    name: 'rebootanika by foodism360',
    first_name: 'rebootanika by',
  },
  width: 3600,
};

describe('Testing PhotoCard component', () => {
  afterEach(cleanup);

  const props = {
    handlerClick: jest.fn(),
    data: photo,
    key: 'key',
  };

  it('renders card image', () => {
    const { getByRole } = render(<PhotoCard {...props} />);
    const cardImage = getByRole('img');
    expect(cardImage).toHaveAttribute('src', photo.urls.small);
  });
});
