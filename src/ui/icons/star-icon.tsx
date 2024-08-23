import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const StarIcon = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#2767ED"
      d="m10 14.392 5.15 3.108-1.367-5.858 4.55-3.942-5.991-.508L10 1.667 7.658 7.192 1.666 7.7l4.55 3.942L4.85 17.5 10 14.392Z"
    />
  </Svg>
);
export default StarIcon;
