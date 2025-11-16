import { h } from "preact";
import style from "./style.css";
import Search from "../../components/search";
import ResultsContainer from "../../components/ResultsContainer";
const Home = () => {
  return (
    <div class={style.home}>
      <Search />
      <ResultsContainer />
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
