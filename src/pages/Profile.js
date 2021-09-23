import {useEffect, useState} from "react";
import {getUser} from "../components/services/user.service";
import {set} from "react-hook-form";
import axios from "axios";
import MeetupList from "../components/forms/MeetupList";


const Profile = () => {

    const [loadedData, setLoadedData]  = useState([]);
    const [loading, setLoading]  = useState(true);
    const [error, setError]  = useState(null);

    const token = JSON.parse(localStorage.getItem('token'));
    useEffect( () => {
        // (
            fetch('http://localhost:8000/api/user', {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer: ' + token
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                const meetups = [];

                for (const key in data){
                    const meetup = {
                        id: key,
                        ...data[key]
                    };

                    meetups.push(meetup);
                }

                console.log(data);
                 setLoading(false);
                 setLoadedData(data);
            })
        // )();
    }, []);



    if(loading) {
        return (
            <section>
                <p>Loading. . . .</p>
            </section>
        )
    }

    return(
      <div>
          <p>You clicked times</p>
          <MeetupList meetups={loadedData} />
          <button>
              Click me
          </button>
      </div>
    );

}

export default Profile

