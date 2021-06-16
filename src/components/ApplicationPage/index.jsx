import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StyledApplicationPage from './styles';

function ApplicationPage() {
  const [application, setApplication] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5050/apps/${id}`).then(({ data }) => {
      setApplication(data[0]);
    });
  }, []);
  return (
    <StyledApplicationPage>
      <h2>Application</h2>
      <p>{application.name}</p>
    </StyledApplicationPage>
  );
}

export default ApplicationPage;
