import {useHistory, useParams} from "react-router";
import {useEffect, useState} from "react";
import {fetchAsJson} from "./utils";

export default function GithubRepoPage(props) {
  const { user, repo } = useParams();
  const history = useHistory();

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [repoDetails, setRepoDetails] = useState({});

  useEffect( () =>{
    fetchAsJson(`https://api.github.com/repos/${user}/${repo}`)
    .then(
        (result) => {
          setLoading(false);
          setRepoDetails(result);
        }).catch((error) => {
      setLoading(false);
      setError(error);
    });
  }, [user]);

  return (
      <div>
        { isLoading && <div>Loading repos ...</div>}
        { !isLoading && error ? <div>{error.message}</div> : "" }
        { !isLoading && <div>
          <div><b>Name:</b> {repoDetails.name}</div>
          <div><b>URL:</b> {repoDetails.html_url}</div>
          <div><b>Description:</b> {repoDetails.description}</div>

          <a onClick={() => history.goBack()}>&laquo; go back</a>
        </div> }
      </div>
  );
}
