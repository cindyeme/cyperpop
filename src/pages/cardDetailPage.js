import React, { useState, useEffect } from 'react';
import { PageMotion } from 'layout/PageMotion.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import CardDetail from 'containers/profileContainers/cardDetail';
import { useHistory } from 'react-router-dom';

const CardDetailsPage = () => {
  let History = useHistory();

  const [loaded, isLoaded] = useState(false);

  const [details, setDetails] = useState(History.location.state);

  useEffect(() => {
    if (History.location.state) {
      setDetails(History.location.state);

      isLoaded(true);
    }
  }, [History.location.state]);

  return (
    <PageMotion>
      {loaded ? <CardDetail detail={details} /> : 'Loading'}
      {/* <Footer /> */}
    </PageMotion>
  );
};

export default CardDetailsPage;
