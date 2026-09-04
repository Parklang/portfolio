import { type Experience, experiences } from './experience';

export type User = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  location: string;
  domain: string;
  website?: string;
  description: string;
  jobTitle: string;
  twitterHandle: string;
  namePronunciationUrl: string;
  username: string;
  tagline: string;
  social: {
    twitter: string;
    github: string;
    linkedin: string;
    bluesky: string;
  };
  image: {
    profile: string;
  };
  flipSentences: string[];
  experiences?: Experience[];
};

const USER: User = {
  firstName: 'Huy Hoàng',
  lastName: 'Nguyễn',
  name: 'Huy Hoàng',
  email: 'huyhoanglnqk38bo@gmail.com',
  domain: 'portfolio-website-six-opal-96.vercel.app',
  jobTitle: 'Full-Stack Developer',
  username: 'Parklang',
  tagline: 'Huy Hoàng — Lập trình viên đam mê xây dựng sản phẩm web hiệu năng cao',
  twitterHandle: '',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  description:
    'Lập trình viên Full-Stack đam mê xây dựng các sản phẩm web hiệu năng cao, tối ưu trải nghiệm người dùng. Chia sẻ kiến thức về kiến trúc phần mềm, công nghệ web hiện đại và hành trình phát triển sự nghiệp.',
  namePronunciationUrl: '',
  social: {
    twitter: '',
    github: 'https://github.com/Parklang',
    linkedin: 'https://www.linkedin.com/in/nguyenhuyhoang459904',
    bluesky: '',
  },
  flipSentences: [
    'Xây dựng sản phẩm web hiệu năng cao.',
    'Full-Stack Development & Software Engineering.',
    'Tối ưu trải nghiệm người dùng.',
    'Clean code, scalable architecture.',
    'Đam mê công nghệ, không ngừng học hỏi.',
  ],
  image: {
    profile: 'https://github.com/Parklang.png',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
