import React, { FC, useState,MouseEvent } from 'react';
import styles from './showMoreText.module.css';

interface IProps {
 children: string;
 length: number;
 className?: string;
}

const ShowMoreText: FC<IProps> = ({ children, length, className = '' }) => {
 const [isHidden, setIsHidden] = useState(true);

 const handleHiddenChange = (e: MouseEvent<HTMLElement>) => {
  e.stopPropagation();

  setIsHidden((prevState) => !prevState);
 };

 if (children.length <= length)
  return (
   <span className={className} data-qa='show-more-text'>
    {children}
   </span>
  );

 return (
  <div className={className}>
   {isHidden ? children.slice(0, length) + '...' : children} <br/>
   <span onClick={handleHiddenChange} className={styles.showMoreText}>
    {isHidden ? 'Показать больше' : 'Скрыть'}
    </span>
  </div>
 );
};

export default ShowMoreText;