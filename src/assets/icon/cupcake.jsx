import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */ const CupCake =
  (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={60}
      height={54}
      fill="none"
      {...props}
    >
      <G filter="url(#a)">
        <Path fill="url(#b)" d="M4 0h52v46H4z" shapeRendering="crispEdges" />
      </G>
      <Defs>
        <Pattern
          id="b"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#c" transform="matrix(.00107 0 0 .00121 -.01 0)" />
        </Pattern>
        <Image
          id="c"
          width={950}
          height={824}
        />
      </Defs>
    </Svg>
  )
export default CupCake