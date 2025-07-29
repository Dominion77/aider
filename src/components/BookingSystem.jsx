import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiSearch, FiCalendar, FiClock, FiMapPin, FiStar, FiFilter, FiChevronDown, FiX, FiArrowLeft, FiCheck } from 'react-icons/fi';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const BookingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const BookingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 20px;

  h1 {
    font-size: 32px;
    color: #2563eb;
    font-weight: 700;
  }
`;

const SearchFilterContainer = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SearchBar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 0 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    border: none;
    padding: 12px;
    font-size: 16px;
    outline: none;
    background: transparent;
  }

  svg {
    color: #64748b;
  }
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
  }
`;

const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DoctorCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: slideUp 0.5s ease-out;
  animation-fill-mode: both;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1);
  }

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
`;

const DoctorImage = styled.div`
  height: 200px;
  background: #e0f2fe;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const DoctorDetails = styled.div`
  padding: 20px;

  h3 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #1e293b;
  }

  .specialty {
    color: #3b82f6;
    font-weight: 600;
    margin-bottom: 10px;
    font-size: 16px;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #64748b;
    margin-bottom: 15px;
    font-size: 14px;
  }
`;

const DoctorRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 15px;
  color: #f59e0b;

  span {
    color: #64748b;
    font-size: 14px;
  }
`;

const DoctorAvailability = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #64748b;

  .available {
    color: #10b981;
    font-weight: 600;
  }
`;

const DoctorFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const BookingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease-out;
`;

const BookingModalContainer = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  position: relative;
  animation: slideUp 0.4s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #64748b;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
  color: #3b82f6;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  .react-calendar__tile--active {
    background: #3b82f6;
    color: white;
  }

  .react-calendar__tile--now {
    background: #e0f2fe;
  }
`;

const TimeSlots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

const TimeSlot = styled.button`
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: ${props => props.selected ? '#3b82f6' : 'white'};
  color: ${props => props.selected ? 'white' : '#1e293b'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;

  &:hover {
    border-color: #3b82f6;
  }

  &:disabled {
    background: #f1f5f9;
    color: #94a3b8;
    cursor: not-allowed;
    border-color: #e2e8f0;
  }
`;

const AppointmentSummary = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;

  p {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-weight: 500;
      color: #475569;
    }

    span:last-child {
      font-weight: 600;
      color: #1e293b;
    }
  }
`;

const ConfirmationMessage = styled.div`
  text-align: center;
  padding: 40px 20px;

  .icon {
    width: 80px;
    height: 80px;
    background: #10b981;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 40px;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 15px;
    color: #1e293b;
  }

  p {
    color: #64748b;
    font-size: 16px;
    line-height: 1.6;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const BookingSystem = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState('doctor'); // 'doctor', 'date', 'time', 'confirm', 'success'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    
    const mockDoctors = [
      {
        id: 1,
        name: 'Sarah Johnson',
        specialty: 'Cardiologist',
        location: 'New York Medical Center',
        rating: 4.9,
        available: 'Tomorrow',
        image: '/images/an6.jpeg',
        nextAvailable: new Date(Date.now() + 86400000) // Tomorrow
      },
      {
        id: 2,
        name: 'Michael Chen',
        specialty: 'Neurologist',
        location: 'Boston General Hospital',
        rating: 4.7,
        available: 'Today',
        image: '/images/an1.jpeg',
        nextAvailable: new Date() // Today
      },
      {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialty: 'Pediatrician',
        location: 'Los Angeles Children\'s Hospital',
        rating: 4.8,
        available: 'Next Week',
        image: '/images/an7.jpeg',
        nextAvailable: new Date(Date.now() + 604800000) // Next week
      },
      {
        id: 4,
        name: 'James Wilson',
        specialty: 'Orthopedic Surgeon',
        location: 'Chicago Medical Center',
        rating: 4.6,
        available: 'Tomorrow',
        image: '/images/an2.jpeg',
        nextAvailable: new Date(Date.now() + 86400000) // Tomorrow
      },
      {
        id: 5,
        name: 'Priya Patel',
        specialty: 'Dermatologist',
        location: 'Houston Skin Clinic',
        rating: 4.9,
        available: 'Today',
        image: '/images/an8.jpeg',
        nextAvailable: new Date() // Today
      },
      {
        id: 6,
        name: 'Robert Kim',
        specialty: 'Ophthalmologist',
        location: 'San Francisco Eye Center',
        rating: 4.7,
        available: 'Next Week',
        image: '/images/an3.jpeg',
        nextAvailable: new Date(Date.now() + 604800000) // Next week
      }
    ];
    setDoctors(mockDoctors);
  }, []);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Generate time slots (in a real app, this would come from the doctor's availability)
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9;
    const endHour = 17;
    
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour}:00 - ${hour}:30`);
      slots.push(`${hour}:30 - ${hour + 1}:00`);
    }
    
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const handleBookAppointment = () => {
    setBookingConfirmed(true);

    setTimeout(() => {
      setBookingStep('success');
    }, 3000);
  };

  const startBookingProcess = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
    setBookingStep('doctor');
    setSelectedDate(doctor.nextAvailable);
    setSelectedTime(null);
    setBookingConfirmed(false);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
    setSelectedDoctor(null);
    setBookingStep('doctor');
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <BookingContainer>
      <BookingHeader>
        <h1>Find & Book Doctors</h1>
        <SearchFilterContainer>
          <SearchBar>
            <FiSearch />
            <input
              type="text"
              placeholder="Search for doctors by name, specialty or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>
          <FilterButton>
            <FiFilter /> Filter <FiChevronDown />
          </FilterButton>
        </SearchFilterContainer>
      </BookingHeader>

      <DoctorsGrid>
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id}>
            <DoctorImage>
              
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: '#93c5fd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '40px',
                fontWeight: 'bold'
              }}>
                <img src= {doctor.image}/>
                {doctor.image}
              </div>
            </DoctorImage>
            <DoctorDetails>
              <h3>{doctor.name}</h3>
              <div className="specialty">{doctor.specialty}</div>
              <div className="location">
                <FiMapPin /> {doctor.location}
              </div>
              <DoctorRating>
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <span>{doctor.rating}</span>
              </DoctorRating>
              <DoctorAvailability>
                <FiCalendar /> Next available: <span className="available">{doctor.available}</span>
              </DoctorAvailability>
              <DoctorFooter>
                <button 
                  className="btn-primary" 
                  style={{ padding: '10px 20px' }}
                  onClick={() => startBookingProcess(doctor)}
                >
                  <FiCalendar /> Book Appointment
                </button>
              </DoctorFooter>
            </DoctorDetails>
          </DoctorCard>
        ))}
      </DoctorsGrid>

      {showBookingModal && selectedDoctor && (
        <BookingModal>
          <BookingModalContainer className="glass">
            <CloseButton onClick={closeBookingModal}>
              <FiX />
            </CloseButton>

            {bookingStep === 'doctor' && (
              <>
                <h2>Book Appointment with Dr. {selectedDoctor.name}</h2>
                <p style={{ marginBottom: '20px' }}>{selectedDoctor.specialty}</p>
                
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                  <div style={{ flex: 1 }}>
                    <h3>Doctor Information</h3>
                    <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
                    <p><strong>Location:</strong> {selectedDoctor.location}</p>
                    <p><strong>Rating:</strong> {selectedDoctor.rating}/5</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>Next Availability</h3>
                    <p>{formatDate(selectedDoctor.nextAvailable)}</p>
                  </div>
                </div>
                
                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => setBookingStep('date')}
                >
                  Select Date & Time
                </button>
              </>
            )}

            {bookingStep === 'date' && (
              <>
                <BackButton onClick={() => setBookingStep('doctor')}>
                  <FiArrowLeft /> Back to Doctor Info
                </BackButton>
                
                <h2>Select Date</h2>
                <p>Choose a date for your appointment with Dr. {selectedDoctor.name}</p>
                
                <StyledCalendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  minDate={new Date()}
                />
                
                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  onClick={() => setBookingStep('time')}
                >
                  Select Time Slot
                </button>
              </>
            )}

            {bookingStep === 'time' && (
              <>
                <BackButton onClick={() => setBookingStep('date')}>
                  <FiArrowLeft /> Back to Date Selection
                </BackButton>
                
                <h2>Select Time</h2>
                <p>Choose a time slot on {formatDate(selectedDate)}</p>
                
                <h3 style={{ marginTop: '30px' }}>Available Time Slots</h3>
                <TimeSlots>
                  {timeSlots.map((slot, index) => (
                    <TimeSlot
                      key={index}
                      selected={selectedTime === slot}
                      onClick={() => setSelectedTime(slot)}
                    >
                      {slot}
                    </TimeSlot>
                  ))}
                </TimeSlots>

                {selectedTime && (
                  <button 
                    className="btn-primary" 
                    style={{ width: '100%' }}
                    onClick={() => setBookingStep('confirm')}
                  >
                    Continue to Confirmation
                  </button>
                )}
              </>
            )}

            {bookingStep === 'confirm' && (
              <>
                <BackButton onClick={() => setBookingStep('time')}>
                  <FiArrowLeft /> Back to Time Selection
                </BackButton>
                
                <h2>Confirm Appointment</h2>
                
                <AppointmentSummary>
                  <p>
                    <span>Doctor:</span>
                    <span>Dr. {selectedDoctor.name}</span>
                  </p>
                  <p>
                    <span>Specialty:</span>
                    <span>{selectedDoctor.specialty}</span>
                  </p>
                  <p>
                    <span>Date:</span>
                    <span>{formatDate(selectedDate)}</span>
                  </p>
                  <p>
                    <span>Time:</span>
                    <span>{selectedTime}</span>
                  </p>
                  <p>
                    <span>Location:</span>
                    <span>{selectedDoctor.location}</span>
                  </p>
                  <p>
                    <span>Duration:</span>
                    <span>30 minutes</span>
                  </p>
                </AppointmentSummary>

                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  onClick={handleBookAppointment}
                  disabled={bookingConfirmed}
                >
                  {bookingConfirmed ? 'Confirming...' : 'Confirm Appointment'}
                </button>
              </>
            )}

            {bookingStep === 'success' && (
              <ConfirmationMessage>
                <div className="icon">
                  <FiCheck />
                </div>
                <h2>Appointment Confirmed!</h2>
                <p>
                  Your appointment with Dr. {selectedDoctor.name} has been scheduled for {formatDate(selectedDate)} at {selectedTime}.
                </p>
                <p>
                  We've sent a confirmation to your email with all the details.
                </p>
                
                <button 
                  className="btn-primary" 
                  style={{ marginTop: '30px' }}
                  onClick={closeBookingModal}
                >
                  Close
                </button>
              </ConfirmationMessage>
            )}
          </BookingModalContainer>
        </BookingModal>
      )}
    </BookingContainer>
  );
};

export default BookingSystem;