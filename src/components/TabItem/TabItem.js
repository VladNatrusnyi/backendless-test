import styles from './TabItem.module.css';
import {useNavigate} from "react-router";
export const TabItem = ({ id, title, isActive}) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${id}`)}
      className={`${styles.tabItem} ${isActive && styles.active}`}>
      {title}
    </div>
  );
};
