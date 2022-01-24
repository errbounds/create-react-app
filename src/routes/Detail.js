import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function getMovie() {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();

      console.log(json);
    }
    getMovie();
  });
  return <h1>detail</h1>;
}
export default Detail;
