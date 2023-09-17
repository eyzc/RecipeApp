import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ServiceIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      fill="#7B7B7B"
      d="M16.714 12.198v-1.3A7.773 7.773 0 0 0 9.643 3.13V1.798h1.929v-1.3H6.429v1.3h1.929V3.13a7.773 7.773 0 0 0-7.071 7.768v1.3H0v1.3h18v-1.3h-1.286ZM9 4.398a6.457 6.457 0 0 1 6.3 5.2H2.701a6.457 6.457 0 0 1 6.3-5.2H9Zm-6.429 6.5h12.858v1.3H2.571v-1.3Z"
    />
  </Svg>
)
export default ServiceIcon
