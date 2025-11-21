export const isDebug = () => process?.env?.NODE_ENV === 'development';

export const getDomain = () =>
  isDebug() ? 'http://localhost:3000' : process?.env?.NEXT_PUBLIC_API_URL;

export const getVideoUrl = () => 'https://www.youtube.com/embed/7lZnnROdTSY';

export const getStrapiDomain = () =>
  process?.env?.NEXT_PUBLIC_CMS_URL || '';

export const getAPIToken = () =>
  process?.env?.NEXT_PUBLIC_API_TOKEN || '';

export const getGAID = () => process?.env?.NEXT_PUBLIC_GA_ID || '';

export const getPlayLink = () => 'https://www.wg-88.vip/?pid=ttjij645';

export const getMsmId = () => process?.env?.NEXT_PUBLIC_MSM_ID || '';