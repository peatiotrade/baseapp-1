export const buildPath = (path: string, lang: string) => {
  // tslint:disable-next-line: no-parameter-reassignment
  if (path.includes('http')) { path = '';}
  const url = lang.toLowerCase() === 'en' ? path : `/${lang.toLowerCase()}${path}`;
  // tslint:disable-next-line: no-console
  // console.log(url);
  return url;
};
