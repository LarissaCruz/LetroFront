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

const Ilustration = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    width={767.931}
    height={810.136}
    {...props}
  >
    <Path
      d="m563.833 780.044-47.783-30.5 62.239 17.82c39.1-37.353 67.742-89.105 67.742-89.105s-104.722-63.945-169.229-46.881-76.886 61.37-64.372 108.676c12.513 47.304 45.181 79.695 109.688 62.63 14.358-3.797 28.46-12.075 41.715-22.64Z"
      fill="#f2f2f2"
    />
    <Path
      d="m511.298 739.708-3.18.84c-37.009 9.589-67.495 10.984-91.036 4.125-.345-.094-.678-.208-1.023-.302l.472-1.59.473-1.523c25.516 7.768 57.78 4.37 90.063-3.985a108.29 108.29 0 0 0 3.152-.817c13.635-3.657 27.22-8.143 40.276-13.029 1.014-.369 2.04-.758 3.065-1.147 17.202-6.538 33.4-13.686 47.361-20.31.99-.464 1.974-.943 2.943-1.418 23.586-11.309 40.3-20.9 43.99-23.056.455-.255.701-.405.76-.437l.82 1.383.02.012.826 1.398c-.06.033-.886.538-2.438 1.42-5.787 3.333-21.551 12.185-42.735 22.387-.958.455-1.942.935-2.931 1.398-11.325 5.388-24.063 11.098-37.583 16.527q-5.09 2.054-10.076 3.93a116.67 116.67 0 0 1-3.061 1.162q-21.172 7.925-40.158 13.032Z"
      fill="#fff"
    />
    <Path
      d="M605.107 703.659c-.42-1.017-.846-2.05-1.243-3.107a89.825 89.825 0 0 1-2.805-8.757 87.377 87.377 0 0 1-1.412-38.701c-1.01-.44-2.019-.88-3.048-1.333a90.612 90.612 0 0 0 1.312 40.866 92.94 92.94 0 0 0 3.01 9.343 73.349 73.349 0 0 0 1.255 3.087 89.85 89.85 0 0 0 14.244 23.096q1.03-1.359 2.025-2.658a87.077 87.077 0 0 1-13.338-21.836ZM554.517 725.513q-.526-1.604-.957-3.233a22.22 22.22 0 0 1-.282-1.004 87.84 87.84 0 0 1 17.97-79.331c-1.095-.384-2.19-.768-3.297-1.132a91.102 91.102 0 0 0-17.821 81.296c.116.441.233.882.365 1.318.308 1.098.626 2.176.96 3.25a90.62 90.62 0 0 0 28.717 42.34c.796-.749 1.591-1.498 2.383-2.263a87.237 87.237 0 0 1-28.038-41.24Z"
      fill="#fff"
    />
    <Path
      d="M511.298 739.708a80.317 80.317 0 0 1-1.079-3.252 91.76 91.76 0 0 1-1.015-3.52 88.078 88.078 0 0 1 39.669-97.839c-1.463-.37-2.91-.746-4.363-1.085a91.303 91.303 0 0 0-38.455 99.756c.313 1.18.64 2.357 1.012 3.505a79.41 79.41 0 0 0 1.052 3.276 91.036 91.036 0 0 0 43.714 50.584c1.077-.638 2.126-1.32 3.191-2.006a87.794 87.794 0 0 1-43.726-49.42Z"
      fill="#fff"
    />
    <Path
      d="m448.076 804.248-236.29-95.11a57.663 57.663 0 0 1-31.925-74.94L420.609 36.092a57.663 57.663 0 0 1 74.94-31.925l236.29 95.112a57.663 57.663 0 0 1 31.924 74.939L523.015 772.324a57.663 57.663 0 0 1-74.94 31.924Z"
      fill="#3f3d56"
    />
    <Path
      d="m722.518 114.802-26.302-10.587a9.553 9.553 0 0 0-12.417 5.29 19.531 19.531 0 0 1-25.387 10.815L529.775 68.54a19.531 19.531 0 0 1-10.815-25.387 9.553 9.553 0 0 0-5.29-12.417l-23.191-9.335a43.74 43.74 0 0 0-56.838 24.213L194.604 639.47a43.74 43.74 0 0 0 24.213 56.838l232.04 93.4a43.74 43.74 0 0 0 56.837-24.214L746.73 171.64a43.74 43.74 0 0 0-24.213-56.837Z"
      fill="#fff"
    />
    <Path
      d="m632.542 92.439-72.57-29.211a2.794 2.794 0 1 1 2.086-5.184l72.57 29.211a2.794 2.794 0 1 1-2.086 5.184Z"
      fill="#fff"
    />
    <circle cx={644.989} cy={94.437} r={2.235} fill="#fff" />
    <Path
      d="M692.409 357.474a5.035 5.035 0 0 1-2.788-6.543l36.723-91.231a5.029 5.029 0 0 1 9.33 3.756l-36.722 91.231a5.035 5.035 0 0 1-6.543 2.787ZM374.305 151.127a5.035 5.035 0 0 1-2.787-6.543l8.346-20.734a5.029 5.029 0 1 1 9.33 3.755l-8.346 20.735a5.035 5.035 0 0 1-6.543 2.787ZM358.865 189.486a5.035 5.035 0 0 1-2.787-6.543l8.346-20.735a5.029 5.029 0 1 1 9.33 3.756l-8.346 20.734a5.035 5.035 0 0 1-6.543 2.788ZM580.582 277.543l-100.38-40.404a8.396 8.396 0 0 1-4.642-10.895l24.09-59.852a8.396 8.396 0 0 1 10.895-4.642l100.379 40.404a8.396 8.396 0 0 1 4.643 10.894L591.476 272.9a8.398 8.398 0 0 1-10.894 4.643Zm-71.73-111.583a3.85 3.85 0 0 0-4.992 2.129l-24.09 59.847a3.85 3.85 0 0 0 2.129 4.994l100.372 40.401a3.851 3.851 0 0 0 4.996-2.129l24.09-59.846a3.85 3.85 0 0 0-2.13-4.993Z"
      fill="#3f3d56"
    />
    <Path
      d="m581.177 239.458-.006-.002-77.486-31.19a5.675 5.675 0 0 1-3.539-5.47l1.463-36.291a5.656 5.656 0 0 1 7.754-5.022l102.546 41.074a5.655 5.655 0 0 1 3.158 7.319l.336.337-3.215 3.202-24.913 24.803a5.642 5.642 0 0 1-6.098 1.24ZM522.99 242.098l-34.461-13.872a3.451 3.451 0 0 1 2.577-6.403l34.462 13.871a3.451 3.451 0 0 1-2.577 6.404Z"
      fill="#3f3d56"
    />
    <circle cx={544.327} cy={222.18} r={8.436} fill="#fff" />
    <Path
      d="m430.901 649.404-100.38-40.405a8.396 8.396 0 0 1-4.642-10.895l24.091-59.851a8.396 8.396 0 0 1 10.895-4.643l100.379 40.404a8.396 8.396 0 0 1 4.643 10.894l-24.091 59.852a8.398 8.398 0 0 1-10.895 4.644ZM359.172 537.82a3.85 3.85 0 0 0-4.993 2.128l-24.09 59.847a3.85 3.85 0 0 0 2.13 4.994l100.371 40.402a3.851 3.851 0 0 0 4.997-2.13l24.09-59.846a3.85 3.85 0 0 0-2.13-4.993Z"
      fill="#3f3d56"
    />
    <Path
      d="m431.496 611.318-.005-.002-77.486-31.19a5.675 5.675 0 0 1-3.54-5.47l1.463-36.291a5.656 5.656 0 0 1 7.754-5.022l102.546 41.075a5.655 5.655 0 0 1 3.159 7.318l.335.337-3.215 3.203v-.001l-24.912 24.804a5.642 5.642 0 0 1-6.099 1.24ZM373.31 613.958l-34.462-13.872a3.451 3.451 0 0 1 2.578-6.403l34.462 13.872a3.451 3.451 0 0 1-2.578 6.403Z"
      fill="#3f3d56"
    />
    <circle cx={394.646} cy={594.04} r={8.436} fill="#fff" />
    <circle cx={470.668} cy={405.554} r={92.272} fill="#252837" />
    <Path
      d="m505.686 463.451-100.38-40.404a8.396 8.396 0 0 1-4.642-10.896l24.091-59.85a8.396 8.396 0 0 1 10.895-4.643l100.379 40.404a8.396 8.396 0 0 1 4.643 10.894l-24.091 59.852a8.398 8.398 0 0 1-10.895 4.643Zm-71.729-111.583a3.85 3.85 0 0 0-4.993 2.129l-24.09 59.847a3.85 3.85 0 0 0 2.13 4.994l100.371 40.401a3.851 3.851 0 0 0 4.997-2.129l24.09-59.846a3.85 3.85 0 0 0-2.13-4.993Z"
      fill="#3f3d56"
    />
    <Path
      d="m506.281 425.366-.005-.002-77.486-31.19a5.675 5.675 0 0 1-3.54-5.47l1.463-36.291a5.656 5.656 0 0 1 7.754-5.022l102.546 41.074a5.655 5.655 0 0 1 3.159 7.319l.335.337-3.215 3.202-24.912 24.803a5.642 5.642 0 0 1-6.099 1.24ZM448.095 428.006l-34.462-13.872a3.451 3.451 0 0 1 2.578-6.403l34.462 13.871a3.451 3.451 0 0 1-2.578 6.404Z"
      fill="#3f3d56"
    />
    <Path
      d="M221.319 473.097a12.074 12.074 0 0 0-14.134-11.96l-20.777-37.542-10.343 19.753 21.315 32.623a12.14 12.14 0 0 0 23.939-2.874Z"
      fill="#9e616a"
    />
    <Path
      d="m207.896 321.452-21.365-1.499s-2.632-.358-9.87 11.12-32.046 69.675-32.046 69.675l43.464 63.087 14.117-14.053-25.238-50.763 24.19-33.975Z"
      fill="#cacaca"
    />
    <Path
      d="M443.432 389.654a10.483 10.483 0 0 1-14.034-7.838l-36.854-5.425 12.897-14.436 33.02 7.365a10.54 10.54 0 0 1 4.97 20.334ZM301.766 793.352h15.749l7.492-60.746-23.243.001.002 60.745z"
      fill="#9e616a"
    />
    <Path
      d="M297.75 788.21h4.432l17.306-7.038 9.276 7.037h.001a19.766 19.766 0 0 1 19.766 19.765v.643l-50.781.001Z"
      fill="#2f2e41"
    />
    <Path
      fill="#9e616a"
      d="M206.766 793.352h15.749l7.492-60.746-23.243.001.002 60.745z"
    />
    <Path
      d="M202.75 788.21h4.432l17.306-7.038 9.276 7.037h.001a19.766 19.766 0 0 1 19.766 19.765v.643l-50.781.001ZM212.841 494.222l-10.409 62.744 3.5 201.693h25.619l39.36-213.346 28.313 209.839 25.759-1.115 12.855-211.81-11.551-54.065-113.446 6.06z"
      fill="#2f2e41"
    />
    <Path
      d="m306.971 307.628-27.42-4.04-5.83-15.137-38.63-.054-8.68 19.765-39.475 11.918 32.705 112.348s-18.023 41.751-13.59 41.93 6.616 6.517 3.524 9.848-9.296 1.212-6.194 6.272a23.624 23.624 0 0 1 3.496 9.035s130.8 27.925 123.554-8.083c-.9-4.477-11.83-66.492-11.83-66.492s9.517-10.531 5.45-14.716-1.92-48.384-1.92-48.384Z"
      fill="#cacaca"
    />
    <Path
      fill="#cacaca"
      d="m302.483 312.537 4.488-4.909 60.97 35.75 51.59 20.575 1 18-67-8-47.42-23.187-3.628-38.229z"
    />
    <Path
      d="M285.53 245.04a32.275 32.275 0 0 1-32.274 32.274 33.134 33.134 0 0 1-7.549-.883 32.287 32.287 0 1 1 39.824-31.392Z"
      fill="#9e616a"
    />
    <Path
      d="m261.9 271.212-23.18 4.47a15.016 15.016 0 0 1-6.623.275c-3.449-.908-5.76-4.09-7.523-7.189a68.075 68.075 0 0 1-7.245-47.81c.792-3.595 2.485-7.714 6.092-8.446 1.048-.213 2.233-.129 3.063-.804 1.222-.994.82-3.1-.38-4.12a8.157 8.157 0 0 0-4.426-1.439 11.186 11.186 0 0 1 8.273-3.935l-6.2-3.445c2.986-2.073 6.999-1.883 10.522-.988s6.914 2.412 10.533 2.751c4.545.426 9.028-1.034 13.557-1.599a35.542 35.542 0 0 1 34.334 17.09 15.43 15.43 0 0 1 2.28 6.426 7.391 7.391 0 0 1-2.307 6.209c-2.538 2.135-6.536 1.82-8.995 4.047-1.896 1.716-2.368 4.486-2.475 7.04s.015 5.224-1.08 7.535-3.951 4.047-6.235 2.899c-.101-3.165-3.748-5.405-6.846-4.751s-5.385 3.47-6.277 6.508-.626 6.283-.238 9.425.893 6.321.457 9.457"
      fill="#2f2e41"
    />
    <circle cx={465.83} cy={409.024} r={8.436} fill="#252837" />
    <Path
      d="M648.485 810.136H1.19a1.19 1.19 0 0 1 0-2.381h647.294a1.19 1.19 0 0 1 0 2.381Z"
      fill="#cacaca"
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
    width={23}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.35 6.234v-.002C.328 2.972 2.903.35 6.061.35c2.23 0 4.18 1.33 5.112 3.273l.315.657.316-.657C12.736 1.68 14.686.35 16.915.35c3.159 0 5.735 2.622 5.735 5.884 0 3.927-2.79 7.027-5.674 9.177a27.989 27.989 0 0 1-5.604 3.21 25.514 25.514 0 0 1-1.617-.768 27.008 27.008 0 0 1-3.858-2.423C3.08 13.288.35 10.188.35 6.234Z"
      stroke="#EB1C24"
      fill="#F9585800"
      strokeWidth={0.7}
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
