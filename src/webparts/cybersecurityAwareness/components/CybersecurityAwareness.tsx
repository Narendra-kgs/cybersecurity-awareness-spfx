import * as React from 'react';
import styles from './CybersecurityAwareness.module.scss';
import { pageMarkup, pageStyles } from './pageContentOriginal';

const CybersecurityAwareness: React.FC = () => (
  <div className={styles.webPartRoot}>
    <style>{pageStyles}</style>
    <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
  </div>
);
export default CybersecurityAwareness;
