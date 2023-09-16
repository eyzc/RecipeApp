import * as React from "react"
import Svg, { Path } from "react-native-svg"
const StarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF6B00"
      d="M7.142.522 5.189 4.4l-4.37.624c-.783.111-1.097 1.058-.529 1.6L3.451 9.64l-.747 4.262c-.135.77.693 1.347 1.387.987L8 12.878l3.909 2.012c.694.357 1.522-.217 1.387-.987L12.55 9.64l3.16-3.017c.57-.542.255-1.489-.528-1.6L10.81 4.4 8.858.522c-.35-.692-1.363-.7-1.716 0Z"
    />
  </Svg>
)
export default StarIcon
