import React, { useState, useEffect } from "react";
import "./css/advertising.css";

const AdvertisingPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const redirectToResults = () => {
    window.location.href = "/result";
  };

  return (
    <div>
      <h1>Advertising Page</h1>
      <p>
        Willkommen zum ultimativen Software Bootcamp! Möchtest du deine
        Programmierkenntnisse auf das nächste Level bringen? Träumst du davon,
        innovative Software zu entwickeln und in der Tech-Branche
        durchzustarten? Dann ist unser Software Bootcamp genau das Richtige für
        dich! In unserem intensiven und praxisorientierten Bootcamp bieten wir:
        Expertengeleitete Schulungen in den neuesten Programmiersprachen und
        Technologien Praktische Projekte, um deine Fähigkeiten sofort anzuwenden
        Individuelles Mentoring und Unterstützung bei deinem Lernprozess Zugang
        zu einem Netzwerk aus erfahrenen Profis und potenziellen Arbeitgebern
        Karriereorientierte Workshops und Ressourcen, um deine beruflichen Ziele
        zu erreichen Egal, ob du gerade erst anfängst oder bereits Erfahrung
        hast, unser Bootcamp ist darauf ausgerichtet, dich auf deiner Reise zum
        Software-Experten zu begleiten. Bewirb dich jetzt und sichere dir deinen
        Platz im nächsten Kurs! Starte noch heute deine Karriere in der
        aufregenden Welt der Softwareentwicklung!
      </p>
      {showButton && (
        <button className="btn-ad-style" onClick={redirectToResults}>
          Go to Results
        </button>
      )}
    </div>
  );
};
