import {useState} from "react";
import { useHistory } from 'react-router';


export default function HomePage() {

  const [username, setUsername] = useState("");
  const history = useHistory();

  return (
    <div>
      <label>Username:</label>
      <input type="text" data-testid="username" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
      <button data-testid="button" onClick={() => history.push(`/repos/${username}`)}>Go</button>
    </div>
  );
}

