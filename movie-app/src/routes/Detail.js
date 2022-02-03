import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams(); //url의 변하는 값을 가져올 수 있읍
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail ({id})</h1>;
}
export default Detail;
