import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="256" fill="#00CC9B"/>
      <ellipse cx="219.885" cy="303.908" rx="68.0537" ry="47.9079" fill="white"/>
      <path d="M306.611 130.211L333.017 125.76L286.465 311.524L256 318.267L306.611 130.211Z" fill="white"/>

      
    </Svg>
  
  );
};

export default Icon;


