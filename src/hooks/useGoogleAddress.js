import React, { useEffect, useState } from 'react';

export const useGoogleAddress = (address) => {
  const [isLoading, setIsLoading] = useState(true);
  const [location, setlocation] = useState();
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`;

  useEffect(() => {
    async function getLocation() {
      const resp = await fetch(API);
      const data = await resp.json();
      setlocation(data.results[0].geometry.location);
      setIsLoading(false);
    }
    if (isLoading) {
      getLocation();
    }
  }, [isLoading]);

  return location;
};
