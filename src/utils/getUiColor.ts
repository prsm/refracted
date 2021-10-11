const getUIColor = (color: UIColor): string => {
  switch (color) {
    case 'current':
      return 'fill-current';
    case 'lila':
      return 'text-ui-lila';
    case 'violett':
      return 'text-ui-violett';
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
      return 'text-brand-white dark:text-brand-white';
    case 'black':
      return 'text-brand-black dark:text-brand-white';

    default:
      return 'fill-current';
  }
};

export type UIColor =
  | 'current'
  | 'lila'
  | 'violett'
  | 'blue'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'white'
  | 'black';

export default getUIColor;
