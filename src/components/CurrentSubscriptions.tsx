import {getSubscribedPlaylists} from '../idb';
import {useAsync} from 'react-async-hook';

const getSubscriptions = async () => await getSubscribedPlaylists();

export function CurrentSubscriptions() {
  const subscriptions = useAsync(getSubscriptions, []);

  return (
    <ul>
      {subscriptions.result &&
        [...subscriptions.result.values()].map((name) => <li>{name}</li>)}
    </ul>
  );
}