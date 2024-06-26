import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import henry from "../../src/images/henry.png"
import javas from "../../src/images/javas.png"
import web from "../../src/images/webb.png"
import ingles from "../../src/images/ingless.png"
import aws from "../../src/images/AWS Certified Cloud Practitioner certificate_page-0001.jpg"

const CertificatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CertificateCard = styled(motion.div)`
  width: 23%;
  height: 23%;
  margin: 20px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.accent}; /* Nuevo */

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    width: 40%; /* Ajustar el tamaño de la tarjeta en dispositivos más pequeños */
    height: 40%;
    margin: 15px; /* Reducir el margen en dispositivos más pequeños */
  }

  @media (max-width: 768px) {
    width: 80%; /* Ajustar el tamaño de la tarjeta en dispositivos móviles */
    height: 80%;
    margin: 10px; /* Reducir el margen en dispositivos móviles */
  }
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const certificatesData = [
  {
    id: 5,
    imageUrl: aws,
  },
  { id: 4, imageUrl: ingles },
  { id: 2, imageUrl: javas},
  { id: 1, imageUrl: henry },
  { id: 3, imageUrl: web },
];

const Certificates = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (showCertificates) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.3 },
      }));
    }
  }, [controls, showCertificates]);

  useEffect(() => {
    setTimeout(() => {
      setShowCertificates(true);
    }, 100);
  }, []);

  return (
    <CertificatesContainer>
      {certificatesData.map((certificate, index) => (
        <CertificateCard
          key={certificate.id}
          initial={{ opacity: 0 }}
          animate={controls}
          custom={index}
          whileHover={{ scale: 1.05 }}
        >
          <CertificateImage
            src={certificate.imageUrl}
            alt={`Certificate ${certificate.id}`}
          />
        </CertificateCard>
      ))}
    </CertificatesContainer>
  );
};

export default Certificates;
