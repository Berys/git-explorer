import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const ChevronIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#262626"
      fillRule="evenodd"
      d="M4.455 7.83c.439-.44 1.151-.44 1.59 0L12 13.784l5.954-5.955a1.125 1.125 0 0 1 1.591 1.592l-6.75 6.75c-.439.439-1.151.439-1.59 0l-6.75-6.75a1.125 1.125 0 0 1 0-1.591Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ChevronIcon;
