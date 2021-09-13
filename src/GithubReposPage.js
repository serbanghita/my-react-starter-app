import {useEffect, useState} from "react";
import {fetchAsJson} from "./utils";
import {useHistory, useParams} from "react-router";

export default function GithubReposPage(props) {
  let { user } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);
  const history = useHistory();

  useEffect( () =>{
    fetchAsJson(`https://api.github.com/users/${user}/repos`)
    .then(
        (result) => {
          setLoading(false);
          setRepos(result);
        }).catch((error) => {
      setLoading(false);
      setError(error);
    });
  }, [user]);

  return (
      <div>
        { isLoading && <div>Loading repos ...</div>}
        { !isLoading && error ? <div>{error.message}</div> : "" }
        { !isLoading && repos.map((repo, index) => {
          return <div key={index}><a onClick={() => history.push(`/repo/${user}/${repo.name}`)}>{repo.name}</a></div>
        }) }
      </div>
  );
}
