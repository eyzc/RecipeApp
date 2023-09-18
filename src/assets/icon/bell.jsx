import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BellIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M13.2 30c1.987 0 3.598-1.679 3.598-3.75H9.602c0 2.071 1.611 3.75 3.598 3.75Zm12.116-8.772c-1.087-1.216-3.12-3.046-3.12-9.04 0-4.553-3.065-8.198-7.197-9.092V1.875C14.999.84 14.193 0 13.2 0c-.993 0-1.799.84-1.799 1.875v1.221c-4.132.894-7.196 4.539-7.196 9.091 0 5.995-2.034 7.825-3.12 9.04-.338.379-.488.83-.485 1.273.006.96.73 1.875 1.806 1.875h21.588c1.076 0 1.8-.914 1.806-1.875a1.872 1.872 0 0 0-.484-1.272Z"
    />
  </Svg>
)
export default BellIcon