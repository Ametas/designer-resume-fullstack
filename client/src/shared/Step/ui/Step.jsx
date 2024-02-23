import React from 'react';
import style from './style.module.scss';

export const Step = (props) => {
  const { step, isActive, isCompleted, onClick } = props
  return (
    <>
      <i className={`
          ${style['step']} 
          ${isActive ? style.active : ""}
          ${isCompleted ? style.completed : ""}
        `}
        onClick={isCompleted && onClick}
      >
        {step || '1'}
      </i>
      <span className={`
          ${style['line']} 
          ${isActive ? style.active : ""}
          ${isCompleted ? style.completed: ""}
        `}>
      </span>
    </>
  );
}
