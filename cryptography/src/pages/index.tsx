import { useState } from 'react';
import { useRouter } from 'next/router';
import { subscribe } from '../services/user.service';
import { User } from '../models/User.model';

export default function Home() {
  const [name, setName] = useState<string>('');
  const [ethAddress, setEthAddress] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubscribe = async () => {
    const user: User = { name, address: ethAddress };
    try {
      const newAddress = await subscribe(user);
      setAddress(newAddress);
      setError(null);
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        setError('Utilisateur déjà existant avec ce nom ou cette adresse Ethereum.');
      } else {
        setError("Erreur lors de l'inscription");
      }
      console.error("Erreur lors de l'inscription", error);
    }
  };

  return (
    <div>
      <h1>Cryptographie Challenges</h1>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adresse Ethereum"
        value={ethAddress}
        onChange={(e) => setEthAddress(e.target.value)}
      />
      <button onClick={handleSubscribe}>S'inscrire</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {address && (
        <div>
          <p>Votre adresse : {address}</p>
        </div>
      )}
    </div>
  );
}
