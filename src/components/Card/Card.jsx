import picture from '../images/picture.png';
import logo from '../images/logo.png';
import css from './Card.module.css';

const Card = ({ user, follow, unfollow, followedUsers }) => {
  return (
    <li className={css.item}>
      <img className={css.logo} src={logo} alt="avatar" loading="lazy" />
      <img className={css.picture} src={picture} alt="avatar" loading="lazy" />
      <img
        className={css.avatar}
        src={user.avatar}
        alt={user.name}
        width="62"
        height="62"
        loading="lazy"
      />
      <p className={css.tweets}>{user.tweets}&nbsp;Tweets</p>
      <p className={css.followers}>
        {new Intl.NumberFormat('en-US').format(user.followers)}&nbsp;Followers
      </p>
      {followedUsers.includes(user.id) ? (
        <button
          type="button"
          className={'active'}
          onClick={() => unfollow(user)}
          user={user}
        >
          following
        </button>
      ) : (
        <button
          type="button"
          className={'passive'}
          onClick={() => follow(user)}
          user={user}
        >
          follow
        </button>
      )}
    </li>
  );
};

export default Card;