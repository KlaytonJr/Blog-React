// API
import api from 'services/api';

// Hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        
        if (props.content) {
            api.get(`user/${props.content.id_user}`)
                .then((response) => {
                    setUser(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    }, []);

    return (
        <>
            <div className="py-3 bb-black ">
                <h6 className="color-gray">{props.content.date}</h6>
                <h6 className="uppercase color-primary">{props.content.category}</h6>
                <Link to={`/post/${props.content.id}`} className="link-title">
                    <h4 className="mt-1">{props.content.title}</h4>
                </Link>
                
                <p className="mt-1">
                    {props.content.resume}
                </p>
                <div className="mt-2 flex-space">
                    <div className="flex-start-row">
                        <div className="profile">
                            <img src={user.ImageProfile} className="profile-img" alt="" />
                        </div>
                        <div className="ml-2">
                            <h6 className="color-primary">{user.name} {user.surname}</h6>
                            <h6 className="color-gray">{user.user}</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Main;