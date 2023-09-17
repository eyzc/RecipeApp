import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ClockIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#7B7B7B"
      d="M9.002 0a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Zm0 16.616A7.615 7.615 0 1 1 16.616 9a7.626 7.626 0 0 1-7.614 7.614v.002Z"
    />
    <Path
      fill="#7B7B7B"
      d="M9.34 2.676a.767.767 0 0 0-.767.766l-.012 5.371H4.722a.768.768 0 1 0 0 1.535h4.6a.767.767 0 0 0 .767-.766l.014-6.137a.768.768 0 0 0-.763-.769Z"
    />
  </Svg>
)
export default ClockIcon
