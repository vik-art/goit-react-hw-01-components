import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList ({ items }) {
    return (
        <div>
        <h2>Task 3</h2>
        <ul>
            {items.map((item) =>
                <FriendListItem key={item.id} name={item.name} avatar={item.avatar} isOnline = {item.isOnline}/>
            )}
        </ul>
        </div>
    )
}
export default FriendList;