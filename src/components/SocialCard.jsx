
function SocialCard({ user, randomColor }) {
    console.log(user);
    console.log(randomColor);

    const bgColor = {
        backgroundColor: `#${randomColor}`
    }
    return (
        // <div className="card" style={{ backgroundColor: `#${randomColor}` }}>
        <div className="card" style={bgColor}>
            <div className="card__title">{user.first_name} {user.last_name}</div>
            <div className="card__body">
                <div className="card__image">
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </div>
            </div>
        </div >
    )
}

export default SocialCard;