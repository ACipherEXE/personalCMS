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
              <td>Content Type</td>
              <td>{content.enus}</td>
            </tr>
          );
        })}
        <tr>
          <td>Hello World</td>
          <td>Token</td>
          <td>March 5 2025</td>
        </tr>
        <tr>
          <td>Developer Terms</td>
          <td>Token Container</td>
          <td>March 5 2025</td>
        </tr>
        <tr>
          <td>Integer</td>
          <td>Token</td>
          <td>September 20 1998</td>
        </tr>
        <tr>
          <td>Tires</td>
          <td>Token</td>
          <td>September 20 1998</td>
        </tr>
        <tr>
          <td>Motor Bushings</td>
          <td>Token</td>
          <td>March 14 2004</td>
        </tr>
        <tr>
          <td>Car Parts</td>
          <td>Token Container</td>
          <td>March 14 2004</td>
        </tr>
      </table>
    </header>
  );
};

export default ResultsContainer;
