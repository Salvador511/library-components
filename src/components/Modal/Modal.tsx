import React from 'react';
import './Modal.css';
import CloseBtn from '../CloseBtn/CloseBtn'; '../CloseBtn/CloseBtn'

interface PatientInfo {
  name: string;
  ssn: string;
  dateOfBirth: string;
  age: number;
  sex: string;
  phoneNumber: string;
  email: string;
  allergies: string;
  conditions: string;
  surgeries: string;
  bloodType: string;
}

interface DoctorInfo {
  name: string;
  specialty: string;
  age: number;
  medicalLicense: string;
  education: string;
  hospitalAffiliation: string;
  clinicAddress: string;
  contactNumber: string;
  email: string;
  consultationHours: string;
}

type ModalProps = {
  type: 'patient' | 'doctor';
  data: PatientInfo | DoctorInfo;
};

const Modal: React.FC<ModalProps> = ({ type, data }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-info">
          <h2>{data.name}</h2>
          <h3>{type === 'patient' ? (data as PatientInfo).ssn : (data as DoctorInfo).specialty}</h3>
        </div>

        <div className="modal-body-container">
          <img src="src/stories/assets/brayan.jpeg" className="profile-image" alt={data.name} />
          <div className="modal-body">
            {type === 'patient' ? (
              <>
                <p><strong>Date of Birth:</strong> {(data as PatientInfo).dateOfBirth}</p>
                <p><strong>Age:</strong> {(data as PatientInfo).age}</p>
                <p><strong>Sex:</strong> {(data as PatientInfo).sex}</p>
                <p><strong>Phone Number:</strong> {(data as PatientInfo).phoneNumber}</p>
                <p><strong>Email Address:</strong> {(data as PatientInfo).email}</p>
                <p><strong>Allergies:</strong> {(data as PatientInfo).allergies}</p>
                <p><strong>Pre-existing Conditions:</strong> {(data as PatientInfo).conditions}</p>
                <p><strong>Previous Surgeries:</strong> {(data as PatientInfo).surgeries}</p>
                <p><strong>Blood Type:</strong> {(data as PatientInfo).bloodType}</p>
              </>
            ) : (
              <>
                <p><strong>Age:</strong> {(data as DoctorInfo).age}</p>
                <p><strong>Medical License:</strong> {(data as DoctorInfo).medicalLicense}</p>
                <p><strong>Education:</strong> {(data as DoctorInfo).education}</p>
                <p><strong>Hospital Affiliation:</strong> {(data as DoctorInfo).hospitalAffiliation}</p>
                <p><strong>Clinic Address:</strong> {(data as DoctorInfo).clinicAddress}</p>
                <p><strong>Contact Number:</strong> {(data as DoctorInfo).contactNumber}</p>
                <p><strong>Email:</strong> {(data as DoctorInfo).email}</p>
                <p><strong>Consultation Hours:</strong> {(data as DoctorInfo).consultationHours}</p>
              </>
            )}
          </div>
        </div>
        <div className='btn-container'>
          <CloseBtn />
        </div>
      </div>
    </div >
  );
};

export default Modal;