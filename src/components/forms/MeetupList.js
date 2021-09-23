import MeetupItem from "./MeetupItem";
import classes from './MeetupList.module.css';
function MeetupList(props) {
    return (
        <ul>
            {props.meetups.map(meetup => (
                <MeetupItem
                    key={meetup.id}
                    id={meetup.id}
                    name={meetup.name}
                    surname={meetup.surname}
                    email={meetup.email}
                    role={meetup.role}
                />
            ))}
        </ul>
    );
}

export default MeetupList;