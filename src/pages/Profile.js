import {useEffect, useState} from "react";
import {getUser} from "../components/services/user.service";
import User from "../components/forms/User";
import axios from "axios";
import authHeader from "../components/services/auth-header";



const Profile = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author: 'nikola', id: 1 },
        { title: 'My new website', body: 'lorem ipsum', author: 'kole', id: 2 },
        { title: 'My new website', body: 'lorem ipsum', author: 'nidza', id: 3 }
    ]);
    const [user, setUser]  = useState(null);
    const [loading, setLoading]  = useState(true);
    const [error, setError]  = useState(null);

    const token = JSON.parse(localStorage.getItem('token'));

    useEffect( () => {
       fetch('http://localhost:8000/api/user', {
            headers: authHeader(),
        }).then(response => {
           return response.json();
        }).then(data => {
           setUser(data);
            setLoading(false);

        })
        // .catch(error => {
        //     console.error("Error fetching data: ", error);
        //     setError(error);
        // })
        // .finally(() => {
        //     setLoading(false);
        // })
        // const data = await getUser();


        //setUser([0].data.data);
    }, []);

     // console.log(JSON.stringify(user));
    // if(loading) {
    //     return (
    //         <section>
    //             <p>Loading. . . .</p>
    //         </section>
    //     )
    // }

    return(
      <div>
          {loading && <div>Loading. . .</div>}
          { user && <User user={Object.values(user)}/> }

          <button>
              Click me
          </button>
      </div>
    );

}

export default Profile

