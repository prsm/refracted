const getUIColor = (color: UIColor): string => {
  switch (color) {
    case 'current':
      return 'fill-current';
    case 'lila':
      return 'text-ui-lila';
    case 'violet':
      return 'text-ui-violet';
    case 'blue':
      return 'text-ui-blue';
    case 'green':
      return 'text-ui-green';
    case 'yellow':
      return 'text-ui-yellow';
    case 'orange':
      return 'text-ui-orange';
    case 'red':
      return 'text-ui-red';
    case 'white':
      return 'text-brand-white';
    case 'black':
      return 'text-brand-black';
    case 'dark-theme':
      return 'text-brand-black dark:text-brand-white';
    default:
      return 'text-brand-black dark:text-brand-white';
  }
};

export type UIColor =
  | 'current'
  | 'lila'
  | 'violet'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'white'
  | 'black'
  | 'dark-theme';

export default getUIColor;
