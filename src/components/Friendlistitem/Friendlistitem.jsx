import css from './Friendlistitem.module.css'

function FriendListItem({avatar,name,isOnline}) {
    return (
        <div>
  <img  className={css.item} src={avatar} alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
  <p className={css.status}>{isOnline}</p>
</div>
    )  
}
export default FriendListItem;