
function MeetupItem(props) {
    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <p>{props.surname}</p>
                <p>{props.email}</p>
                <p>{props.role}</p>
            </div>
        </li>
    );

}

export default MeetupItem;