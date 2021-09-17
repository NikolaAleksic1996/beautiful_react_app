import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { Button } from 'reactstrap';
function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <Button color="primary" size="lg" block>To Favorites</Button>
                </div>
            </Card>
        </li>
    );

}

export default MeetupItem;