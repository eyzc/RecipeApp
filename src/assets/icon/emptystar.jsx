import * as React from "react"
import Svg, { Path } from "react-native-svg"
const EmptyStarIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF6B00"
      d="m5.203 4.854-.263.04-4.096.624C.541 5.565.36 6 .628 6.274L3.592 9.29l.178.181-.041.25-.701 4.263c-.066.406.322.603.565.469l.002-.001 3.664-2.013.241-.132.24.132 3.665 2.013c.247.135.633-.065.567-.468l-.7-4.262-.042-.25.178-.182 2.963-3.017c.268-.273.087-.709-.214-.754l-4.097-.624-.263-.04-.114-.241L7.853.736a.382.382 0 0 0-.706 0L5.203 4.853Zm0 0 .114-.24L7.147.735l-1.944 4.12Z"
    />
  </Svg>
)
export default EmptyStarIcon
