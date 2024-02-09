import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./assets/meteo-details.css";
import { Card, Col, Row } from "react-bootstrap";


const MeteoDetails = () => {
    const { lat, lon } = useParams();

    const [setForecast] = useState(null);
    const [] = useState(null);

    useEffect(() => {
        const apiKey = "61c993ab2eb91f1a2dc36c8dc82ae1fa";

        const fetchForecast = async () => {
            try {
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=it`;
                const response = await fetch(url);
                const data = await response.json();
                setForecast(data);
            } catch (error) {
                console.error("Errore durante la fetch delle previsioni meteo:", error);
            }
        };


        fetchForecast();
    },);


}








export default MeteoDetails;
