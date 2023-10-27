import styles from './MainPage.module.css';
import {useEffect} from "react";
import tabsData from "../../data/tabs.json";
import {Outlet, useNavigate, useParams} from "react-router";


export const MainPage = () => {
  const navigate = useNavigate();
  const { tabId } = useParams();

  useEffect(() => {
    if (!tabId) {
      navigate(`/${tabsData[0].id}`)
    } else {
      navigate(`/${tabId}`)
    }
  }, [tabId]);


  return (
    <div className={styles.wrapper}>
      <Outlet />
    </div>
  )
}
