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
  jobTitle: 'Software Engineer & IT Support Specialist',
  username: 'Parklang',
  tagline: 'Huy Hoàng — Kỹ sư phần mềm, hỗ trợ hệ thống & vận hành IT',
  twitterHandle: '',
  location: 'TP. Hồ Chí Minh, Việt Nam',
  description:
    'Kỹ sư phần mềm với kinh nghiệm phát triển ứng dụng web và hỗ trợ hệ thống IT. Có khả năng phân tích sự cố, tối ưu hạ tầng kỹ thuật và đảm bảo hệ thống vận hành ổn định.',
  namePronunciationUrl: '',
  social: {
    twitter: '',
    github: 'https://github.com/Parklang',
    linkedin: 'https://www.linkedin.com/in/nguyenhuyhoang459904',
    bluesky: '',
  },
  flipSentences: [
    'Software Development & System Engineering.',
    'IT Support & Technical Troubleshooting.',
    'Network, Infrastructure & Cloud Operations.',
    'Automation, Scripting & DevOps.',
    'Đam mê công nghệ, không ngừng học hỏi.',
  ],
  image: {
    profile: 'https://github.com/Parklang.png',
  },
  experiences: experiences,
};

USER.website = `https://${USER.domain}`;

export { USER };
