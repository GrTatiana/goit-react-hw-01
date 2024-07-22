import s from './Heading.module.css';
import clsx from 'clsx';

export const Heading = ({ title, top, bottom }) => {
  return (
    <h2
      className={clsx(s.title, {
        [s.top]: top,
        [s.bottom]: bottom,
      })}
    >
      {title}
    </h2>
  );
};