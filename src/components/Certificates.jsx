import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

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
`;

const CertificateImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const certificatesData = [
  { id: 1, imageUrl: "../../src/images/henry.png" },
  { id: 2, imageUrl: "../../src/images/javas.png" },
  { id: 3, imageUrl: "../../src/images/webb.png" },
  { id: 4, imageUrl: "../../src/images/ingless.png" },
  {
    id: 5,
    imageUrl:
      "../../src/images/AWS Certified Cloud Practitioner certificate_page-0001.jpg",
  },
];

const Certificates = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (showCertificates) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.2 },
      }));
    }
  }, [controls, showCertificates]);

  useEffect(() => {
    setTimeout(() => {
      setShowCertificates(true);
    }, 1000);
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
