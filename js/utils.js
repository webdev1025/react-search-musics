// @flow
const capitalize = (str: string): string => (`${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`);

function getMedia(str: string): string {
  if (str.indexOf(' ') === -1) {
    return str.toLowerCase();
  }
  const sg = str.split(' ');
  return sg[0] + capitalize(sg[1]);
}

export const getApiUrl = ({
  media,
  query
}: {
  media: string,
  query: string
}) => `https://music.apple.com/search?media=${getMedia(media || 'all')}&term=${query.split(' ').join('+')}`;

export function getKind(str: string): string {
  if (typeof str !== 'string') {
    return '';
  }

  if (str === 'tv') {
    return 'TV';
  } else if (str === 'feature') {
    return '';
  }

  if (str.indexOf('-') === -1) {
    return capitalize(str);
  }
  const sg = str.split('-');
  return `${getKind(sg[0])} ${capitalize(sg[1])}`;
}
