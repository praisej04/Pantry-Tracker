// components/ClientOnlyComponent.js
import { useEffect, useState } from 'react';

const ClientOnlyComponent = () => {
  const [clientSide, setClientSide] = useState(false);

  useEffect(() => {
    setClientSide(true);
  }, []);

  if (!clientSide) return null;

  // Now it's safe to use `window`
  return <div>{window.innerWidth}</div>;
};

export default ClientOnlyComponent;