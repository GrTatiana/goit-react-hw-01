
import FriendListItem from '../Friendlistitem/friendlistitem';
import css from './Friendlist.module.css'

function FriendList ({friendData}){
    return (
        <div>
        <ul className={css.list}>
            {friendData.map(({id, avatar, name, isOnline}) => 
             <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />)}
        </ul>
        </div>
    )
        } 

export default FriendList;

