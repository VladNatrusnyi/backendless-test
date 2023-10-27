import styles from './TabContent.module.css';
import { lazy, Suspense } from 'react';
import tabsData from "../../data/tabs.json";

export const TabContent = ({tabId}) => {
  const contentPath = tabsData.find(el => el.id === tabId).path

  const LazyComponent = lazy(() => import(`../content/${contentPath}`));
  return (
    <Suspense key={tabId} fallback={<div className={styles.tabContent}>Loading...</div>}>
      <div className={styles.tabContent}>
        <LazyComponent />
      </div>
    </Suspense>
  );
};
