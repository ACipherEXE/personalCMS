import { h } from "preact";
import style from "./style.css";
import Search from "../../components/search/search";
import ResultsContainer from "../../components/ResultsContainer/resultsContainer";
import { getTokens } from "../../functions/postgressCalls/postgressCalls";
import { useEffect, useState } from "preact/hooks";
const Home = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    getTokens().then((result) => {
      console.log(result);
      setContent(result);
    });
  }, []);
  return (
    <div class={style.home}>
      <Search />
      <ResultsContainer listOfData={content} />
    </div>
  );
};

const Resource = (props) => {
  return (
    <a href={props.link} class={style.resource}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
};

export default Home;
