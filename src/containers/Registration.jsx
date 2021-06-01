import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RegistrationForm from '../components/RegistrationForm';
import UserResultForm from '../components/UserResultForm';

function ParticipantRegistration() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [participantData, setParticipantData] = useState({});

    return (
        <div className="registration-container">
            {!isRegistered ?
                <RegistrationForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData}/>
                : <UserResultForm setIsRegistered={setIsRegistered} setParticipantData={setParticipantData} participantData={participantData}/>
            }
        </div>
    );
}

export default ParticipantRegistration;
