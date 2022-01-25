import React, { useContext } from 'react';
import { UidContext } from '../components/AppContexte';
import LeftNav from '../components/LeftNav';
import Log from '../components/Log';
import NewPostForm from '../components/Post/NewPostForm';
import FriendsHint from '../components/Profil/FriendsHint';
import Thread from '../components/Thread';
import Trends from '../components/Trends';

const Home = () => {
    const uid = useContext(UidContext);

    return (
        <div className='home'>
            <LeftNav/>
            <div className="main">
                <div className="home-header">
                    {uid? <NewPostForm /> : <Log signin={true} signup={false}/>}
                </div>
                <Thread/>
            </div>
            <div className="right-side">
                <div className="right-side-container">
                    <div className="wrapper">
                        <Trends/>
                        {uid && <FriendsHint/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;