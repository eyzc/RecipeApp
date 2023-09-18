import * as React from "react"
import Svg, { G, Rect, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */ const WaffleTost =
  (props) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={99}
      height={100}
      fill="none"
      {...props}
    >
      <G filter="url(#a)">
        <Rect
          width={99}
          height={87}
          fill="url(#b)"
          rx={24}
          shapeRendering="crispEdges"
        />
      </G>
      <Defs>
        <Pattern
          id="b"
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#c" transform="matrix(.00099 0 0 .00113 0 -.035)" />
        </Pattern>
        <Image
          id="c"
          width={1011}
          height={950}
        />
      </Defs>
    </Svg>
  )
export default WaffleTost