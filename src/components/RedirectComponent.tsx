import React from 'react';

function RedirectComponent() {
  const externalUrl = 'https://discord.gg/pgEEa8GJYV';

  React.useEffect(() => {
    // Redirect to external URL
    window.location.href = externalUrl;
  }, []); 

  return (
    <div>Redirecting to Discord...</div> 
  );
}

export default RedirectComponent;