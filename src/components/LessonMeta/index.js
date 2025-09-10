import React from 'react';
import styles from './styles.module.css';

export default function LessonMeta(props) {
  // Expect props to be passed explicitly from MDX, e.g. <LessonMeta {...frontMatter} />
  const fm = props || {};

  const {difficulty, time, prereqs} = fm;

  if (!difficulty && !time && !(prereqs && prereqs.length)) {
    return null;
  }

  return (
    <div className={styles.metaRow}>
      {difficulty && (
        <span className={`${styles.badge} ${styles.difficulty}`} title="Suggested difficulty">
          Difficulty: {difficulty}
        </span>
      )}
      {time && (
        <span className={`${styles.badge} ${styles.time}`} title="Estimated time to complete">
          Time: {time}
        </span>
      )}
      {Array.isArray(prereqs) && prereqs.length > 0 && (
        <span className={`${styles.badge} ${styles.prereqs}`} title="Prerequisites">
          Prereqs: {prereqs.join(', ')}
        </span>
      )}
    </div>
  );
}
