export const buildPath = (path: string, lang: string) => {
  // tslint:disable
  let _path = path;
  if (path.includes('http')) { _path = ''; }
  const url = lang.toLowerCase() === 'en' ? _path : `/${lang.toLowerCase()}${_path}`;
  // tslint:disable-next-line: no-console
  // console.log(url);
  return url;
};


export const handleRedirectToConfirm = (editParam: string, history) => {
  const lang = localStorage.getItem('lang_code') || 'en';
  switch (editParam) {
    case 'profile':
      history.push(buildPath('/confirm', lang), { profileEdit: true });
      break;
    case 'address':
      history.push(buildPath('/confirm', lang), { addressEdit: true });
      break;
    case 'profilePartialStep':
      history.push(buildPath('/confirm', lang), { profilePartialStep: true });
      break;
    case 'phoneStep':
      history.push(buildPath('/confirm', lang), { phoneStep: true });
      break;
    case 'identifyStep':
      history.push(buildPath('/confirm', lang), { identifyStep: true });
      break;
    case 'addressStep':
      history.push(buildPath('/confirm', lang), { addressStep: true });
      break;
    default:
      break;
  }
};
