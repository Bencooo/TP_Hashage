import { useState } from 'react';
import { useRouter } from 'next/router';
import { subscribe } from '../services/user.service';

export default function Home() {
  const [address, setAddress] = useState<string>('');
  const router = useRouter();

  const handleSubscribe = async () => {
    try {
      const newAddress = await subscribe();
      setAddress(newAddress);
    } catch (error) {
      console.error("Erreur lors de l'inscription", error);
    }
  };

  return (
    <div>
      <h1>Cryptographie Challenges</h1>
      <button onClick={handleSubscribe}>S'inscrire</button>
      {address && (
        <div>
          <p>Votre adresse : {address}</p>
        </div>
      )}
    </div>
  );
}
