export const serverDomain = 'https://e-commerce-trimmers-api.onrender.com';

import { FaRegUser } from 'react-icons/fa';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import { GoSearch } from 'react-icons/go';
import { BsFillHandbagFill } from 'react-icons/bs';
import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    text: 'products',
    url: '/products',
  },

  {
    id: 3,
    url: '/about',
    text: 'about',
  },
];

export const profile = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <GoSearch />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaRegUser />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <BsFillHandbagFill />,
  },
];
export const sublinks = [
  {
    pageId: 1,
    page: 'product',
    links: [
      {
        id: 1,
        label: 'community',
        icon: <Fa500Px />,
        url: '/product/community',
      },
      {
        id: 2,
        label: 'content',
        icon: <FaAccusoft />,
        url: '/product/content',
      },
      {
        id: 3,
        label: 'roles',
        icon: <FaAdversal />,
        url: '/product/roles',
      },
    ],
  },
  {
    pageId: 2,
    page: 'solutions',
    links: [
      {
        id: 1,
        label: 'developers',
        icon: <FaAvianex />,
        url: '/solutions/developers',
      },
      {
        id: 2,
        label: 'content managers',
        icon: <FaBitcoin />,
        url: '/solutions/content-managers',
      },
      {
        id: 3,
        label: 'business teams',
        icon: <FaBtc />,
        url: '/solutions/business teams',
      },
      {
        id: 4,
        label: 'ecommerce',
        icon: <FaCodiepie />,
        url: '/solutions/ecommerce',
      },
    ],
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'The Trimman Company is dedicated to providing quality hair trimmers and other related products for all your hair care needs. We understand the importance of personal grooming and beauty, which is why we strive to provide our customers with the best products available. Our range includes a variety of trimmer models that are designed to give you precision results every time.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'We strive to provide our customers with products that are of the highest quality, ensuring satisfaction with every purchase. We understand that having a great look is important and we want to assist our customers in achieving their desired look with ease.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'Since our launch 10 years ago, Trimman has become known as the go-to experts in trimmers. Our team of professionals have been trusted by thousands of customers for their trimming needs. We provide comprehensive services that include expert advice, product knowledge and a wide range of products to choose from. Not only do we offer competitive prices,',
  },
];
