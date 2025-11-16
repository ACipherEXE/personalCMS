import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Search = () => (
  <header class={style.header}>
    <select id="colors" name="colors">
      <option value="">-- Select --</option>
      <option value="red">Token</option>
      <option value="green">Token Containers</option>
    </select>
    <input type="text" placeholder="Enter text here" />
  </header>
);

export default Search;
