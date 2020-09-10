import React,{InputHTMLAttributes} from "react";

import "./styles.css";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
}
//rest operator
const Input: React.FC<InputProps> = ({label, name, ...rest})=> {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}></input>
    </div>
  );
}

export default Input;
