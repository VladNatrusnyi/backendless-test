import {TabItem} from "../TabItem/TabItem";
import {TabContent} from "../TabContent/TabContent";
import styles from './Tabs.module.css';
import tabsData from './../../data/tabs.json';
import {useParams} from "react-router";

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <div className={styles.tabContainer}>
      <div>
        {
          tabsData.map(tab => {
            return (
              <TabItem
                key={tab.id}
                title={tab.title}
                id={tab.id}
                isActive={tabId === tab.id}
              />
            )
          })
        }
      </div>

      <TabContent tabId={tabId}/>

    </div>
  );
}
