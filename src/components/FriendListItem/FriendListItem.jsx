import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({
    avatar,
    name,
    isOnline
}) => {
    return (
        <div className={css.listItem}>
            <img className={css.avatar}
            src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={clsx(css.isOnline, isOnline === true ? css.online : css.offline)}>{isOnline === true ? "Online" : "Offline"}</p>
</div>
    )
}
export default FriendListItem;