
function SocialCard({ user }) {
    console.log(user);
    return (
        <div className="card">
            <div className="card__title">{user.first_name} {user.last_name}</div>
            <div className="card__body">
                <div className="card__image">
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </div>
            </div>
        </div>
    )
}

export default SocialCard;