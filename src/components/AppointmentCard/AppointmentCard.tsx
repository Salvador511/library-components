import React from 'react';
import './AppointmentCard.css';

interface AppointmentCardProps {
    doctorName: string;
    speciality: string;
    location: string;
    instructions: string;
    date: string;
    time: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
                                                             doctorName,
                                                             speciality,
                                                             location,
                                                             instructions,
                                                             date,
                                                             time,
                                                         }) => {
    return (
        <div className="appointment-card">
            <div className="card-header">
                Medic Appointment
            </div>
            <div className="card-body">
                <p><strong>Doctor:</strong> {doctorName}</p>
                <p><strong>Speciality:</strong> {speciality}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Instructions:</strong> {instructions}</p>
            </div>
            <div className="card-footer">
                <p><strong>Date:</strong> {date} {time}</p>
            </div>
        </div>
    );
};

export default AppointmentCard;