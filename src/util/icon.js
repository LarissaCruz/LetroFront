import * as React from "react";
import Svg, { Path, Defs, G, ClipPath, Rect } from "react-native-svg";

export const MagnifyingGlass = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.708 1.583a7.128 7.128 0 0 1 7.125 7.125 7.128 7.128 0 0 1-7.125 7.125 7.128 7.128 0 0 1-7.125-7.125 7.128 7.128 0 0 1 7.125-7.125Zm0 12.667a5.54 5.54 0 0 0 5.542-5.542 5.54 5.54 0 0 0-5.542-5.541 5.54 5.54 0 0 0-5.541 5.541 5.54 5.54 0 0 0 5.541 5.542Zm6.718.056 2.24 2.239-1.12 1.12-2.24-2.24 1.12-1.119Z"
      fill="#fff"
    />
  </Svg>
);

export const Cart = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.81 12.667V1.81H0V0h2.714a.905.905 0 0 1 .905.905v10.857h11.254l1.809-7.238H5.429v-1.81h12.413a.904.904 0 0 1 .878 1.125l-2.262 9.047a.905.905 0 0 1-.878.685H2.714a.905.905 0 0 1-.904-.904ZM3.619 19a1.81 1.81 0 1 1 0-3.619 1.81 1.81 0 0 1 0 3.619Zm10.857 0a1.81 1.81 0 1 1 0-3.618 1.81 1.81 0 0 1 0 3.618Z"
      fill="#fff"
    />
  </Svg>
);

export const Menu = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M3 4h18v2H3V4Zm0 7h12v2H3v-2Zm0 7h18v2H3v-2Z" fill="#fff" />
  </Svg>
);

export const HomeIcon = (props) => (
  <Svg
    width={21}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.406 17.084a.916.916 0 0 1-.916.916H3.664a.916.916 0 0 1-.916-.916V8.839H0l9.46-8.6a.916.916 0 0 1 1.234 0l9.46 8.6h-2.748v8.245ZM9.161 10.67v5.497h1.832V10.67H9.161Z"
      fill="#646E77"
    />
  </Svg>
);

export const Notification = (props) => (
  <Svg
    width={16}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.535 0c4.16 0 7.535 3.385 7.535 7.56v7.51H0V7.56C0 3.386 3.374 0 7.535 0ZM5.442 15.907h4.186a2.093 2.093 0 0 1-4.186 0Z"
      fill="#646E77"
    />
  </Svg>
);

export const Heart = (props) => (
  <Svg
    width={20}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.108 0c2.956 0 5.351 2.432 5.351 5.838 0 6.81-7.297 10.703-9.73 12.162C7.298 16.54 0 12.649 0 5.838 0 2.432 2.432 0 5.351 0c1.81 0 3.406.973 4.379 1.946C10.703.973 12.298 0 14.108 0Z"
      fill="#646E77"
    />
  </Svg>
);

export const Profile = (props) => (
  <Svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 18a6.857 6.857 0 1 1 13.714 0H0Zm6.857-7.714a5.141 5.141 0 0 1-5.143-5.143A5.141 5.141 0 0 1 6.857 0 5.141 5.141 0 0 1 12 5.143a5.141 5.141 0 0 1-5.143 5.143Z"
      fill="#646E77"
    />
  </Svg>
);

export const Circles = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.263 8.526a4.263 4.263 0 1 1 0-8.526 4.263 4.263 0 0 1 0 8.526Zm0 11.474a4.264 4.264 0 1 1 0-8.527 4.264 4.264 0 0 1 0 8.527ZM15.737 8.526a4.263 4.263 0 1 1 0-8.525 4.263 4.263 0 0 1 0 8.525Zm0 11.474a4.264 4.264 0 1 1 0-8.527 4.264 4.264 0 0 1 0 8.527Z"
      fill="#fff"
    />
  </Svg>
);

export const Favorite = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m10 4.358-.405-.56a5.926 5.926 0 0 0-1.171-1.224 4.531 4.531 0 0 0-2.837-.98 4.878 4.878 0 0 0-3.633 1.58L10 4.358Zm0 0 .405-.56m-.405.56.405-.56m0 0c.35-.483.742-.892 1.171-1.224a4.532 4.532 0 0 1 2.837-.98c1.407 0 2.693.561 3.633 1.58.93 1.009 1.454 2.4 1.454 3.93 0 1.548-.57 2.987-1.869 4.554-1.176 1.42-2.878 2.872-4.904 4.599l-.018.015c-.683.583-1.46 1.244-2.265 1.949a.673.673 0 0 1-.888 0c-.812-.71-1.593-1.376-2.28-1.962l-.003-.002m3.132-12.459-3.132 12.46m0 0c-2.026-1.727-3.727-3.18-4.904-4.6C1.07 10.091.5 8.652.5 7.104c0-1.53.524-2.921 1.454-3.93l5.32 13.083Z"
      stroke="#EB1C24"
    />
  </Svg>
);

export const Filter = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M17.182.727v1.818h-.91l-4.545 6.819v7.727H6.273V9.364L1.727 2.545H.818V.727h16.364ZM3.912 2.545l4.179 6.268v6.46h1.818v-6.46l4.178-6.268H3.913Z"
        fill="#646E77"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(-1.91 -2.91)"
          d="M0 0h21.818v21.818H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export const MultipleArrows = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M9 5.333H5.334v11H3.5v-11H-.167L4.417.75 9 5.333Zm9.167 7.334-4.584 4.583L9 12.667h3.667v-11H14.5v11h3.667Z"
        fill="#646E77"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const Back = (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7.828 13H20v2H7.828l5.364 5.364-1.414 1.414L4 14l7.778-7.778 1.414 1.414L7.828 13Z"
      fill="#000"
    />
  </Svg>
);

export const Seta = (props) => (
  <Svg
    width={11}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      transform="matrix(.80483 .5935 -.56897 .82236 0 1)"
      stroke="#25283799"
      d="M0-.5h12.242"
    />
    <Path
      transform="matrix(.74888 -.6627 .63878 .7694 .807 16)"
      stroke="#25283799"
      d="M0-.5h12.275"
    />
  </Svg>
);

export const CircularIcon = (props) => (
  <Svg
    width={16}
    height={5}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={11} width={5} height={5} rx={2.5} fill="#000" />
    <Rect width={5} height={5} rx={2.5} fill="#000" fillOpacity={0.5} />
  </Svg>
);

export const Contact = (props) => (
  <Svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 18a6.857 6.857 0 1 1 13.714 0H0Zm6.857-7.714a5.141 5.141 0 0 1-5.143-5.143A5.141 5.141 0 0 1 6.857 0 5.141 5.141 0 0 1 12 5.143a5.141 5.141 0 0 1-5.143 5.143Z"
      fill="#646E77"
    />
  </Svg>
);
