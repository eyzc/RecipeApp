import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HomeIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M17.523 7.264 6 16.756V27a1 1 0 0 0 1 1l7.004-.018a1 1 0 0 0 .995-1v-5.983a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5.978a1 1 0 0 0 .999 1.004l7 .019a1 1 0 0 0 1-1V16.749l-11.52-9.485a.762.762 0 0 0-.955 0Zm18.2 6.451L30.5 9.408V.75a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75V5.29L19.904.684a3 3 0 0 0-3.812 0L.272 13.715a.75.75 0 0 0-.1 1.057l1.594 1.937a.752.752 0 0 0 1.057.102l14.7-12.11a.762.762 0 0 1 .956 0l14.7 12.11a.751.751 0 0 0 1.057-.1l1.593-1.937a.748.748 0 0 0-.106-1.059Z"
    />
  </Svg>
)
export default HomeIcon
