import MeetupList from "../components/forms/MeetupList";
import image from "../images/Logo1.png";

const DUMMY_DATA = [
    {
        id: '1',
        title: 'I am firs',
        image: image,
        address: 'Painter, Transportation Equipment',
        description: 'Never before'
    },
    {
        id: '2',
        title: 'I am second',
        image: image,
        address: 'Painter 1, Transportation Equipment',
        description: 'Never before again'
    }
];
function AllMeetupsPage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            <h1>Codeus HR</h1>
        </div>


        // <section>
        //     <h1>HOME</h1>
        //     <MeetupList meetups={DUMMY_DATA}/>
        // </section>
    );
}

export default AllMeetupsPage;