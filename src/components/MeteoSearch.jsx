import '../components/assets/home-search.css';
import { Container, FormControl, Button, Alert } from 'react-bootstrap';
import React, { useState } from 'react';
import { ArrowReturnRight } from 'react-bootstrap-icons';
import MyNav from './MyNavbar';

const MeteoSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [alert, setAlert] = useState({ show: false, message: '' });

    const showAlert = (msg) => {
        setAlert({ show: true, msg });
        setTimeout(() => setAlert({ show: false, message: '' }), 3000);
    };

    const fetchLocationData = async (city) => {
        try {
            const apiKey = '61c993ab2eb91f1a2dc36c8dc82ae1fa';
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            const data = await response.json();

            if (data.length === 0) {
                showAlert('Nessuna cittá trovata! Riprova con un altro nome.');
                return;
            }
        } catch (error) {
            console.error('Errore durante la fetch', error);
            showAlert(
                'Si è verificato un errore durante la ricerca. Riprova più tardi.'
            );
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) {
            showAlert('Inserisci il nome di una città per la ricerca.');
            return;
        }
        fetchLocationData(searchTerm);
    };

    return (

        <>
            <MyNav />
            <div className="img-search-container" style={{ height: '100vh' }}>
                <Container className="search-container">
                    <div className='header-container mb-5'>
                        <h1 className=" text-center text-dark mt-5 display-1">Flash Meteo</h1>
                        <div className='sub-header-container mb-5'><p className=" pb-1 text-center display-6 fw-bold fs-2  ">
                            Il meteo...in un click!
                        </p></div></div>
                    <form onSubmit={handleSearch} className="search-form">
                        <FormControl
                            type="text"
                            placeholder="Per inziare cerca una città..."
                            className="mx-4 custom-search-bar rounded-5 px-4 "
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button
                            variant="outline-dark"
                            type="submit"
                            className="ms-2 me-5 px-4 rounded-5"
                        >
                            <ArrowReturnRight className="fs-3 text-dark " />
                        </Button>
                    </form>
                    {alert.show && (
                        <Alert variant="danger" className="search-alert mt-3">
                            {alert.message}
                        </Alert>
                    )}
                </Container>
            </div></>
    );
};
export default MeteoSearch;
