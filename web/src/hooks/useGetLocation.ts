import { useState, useEffect } from 'react';


const defaultCoords = [-20.341675, -40.293935]

export default function useGetLocation() {
  const [coords, setCoords] = useState<number[] | null>(null);

  useEffect(() => {
    
    function onSuccess (position: GeolocationPosition) {
      setCoords([position.coords.latitude, position.coords.longitude])
    }

    function onError() {
      console.error('solicitação de coordenada recusado!')
      setCoords(defaultCoords);
    }

    try{
      navigator.geolocation.getCurrentPosition(onSuccess, onError)
    } catch (error) {

    }
  }, [] )

  return { coords }

};
