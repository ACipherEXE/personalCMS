import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";
import { getTokens } from "../../functions/postgressCalls/postgressCalls";
const ResultsContainer = ({ listOfData }) => {
  return (
    <header class={style.header}>
      <table>
        <tr>
          <th>Name</th>
          <th>Conntent Type</th>
          <th>Last Modified</th>
        </tr>
        {listOfData.map((content) => {
          return (
            <tr key={content.token_id}>
              <td>{content.token_id}</td>
              <td>{content.contentType}</td>
              <td>{content.lastChanged}</td>
            </tr>
          );
        })}
      </table>
    </header>
  );
};

export default ResultsContainer;
