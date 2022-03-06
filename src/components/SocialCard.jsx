import Address from './Address';
import PhoneNumber from './PhoneNumber';

function SocialCard({ user, randomColor }) {
    //console.log(user);
    //console.log(randomColor);

    const bgColor = {
        backgroundColor: `#${randomColor}`,
        backgroundImage: `linear-gradient(to bottom right, #ffffff, #${randomColor})`
    }
    return (
        // <div className="card" style={{ backgroundColor: `#${randomColor}` }}>
        <div className="card" style={bgColor}>
            <div className="card__title">
                <h2>{user.first_name} {user.last_name}</h2>
            </div>
            <div className="card__body">
                <Address address={user.address} />
                <PhoneNumber phone={user.phone_number} />
                <div className="card__image">
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                </div>
            </div>
        </div >
    )
}

export default SocialCard;