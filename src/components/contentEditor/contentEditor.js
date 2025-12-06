const contentEditor = ({ listOfData, onRowClick }) => {
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
            <tr key={content.id}>
              <td
                class={style.clickable}
                onClick={() => onRowClick && onRowClick(content)}
              >
                {content.name}
              </td>
              <td>{content.contenttype}</td>
              <td>{content.lastChanged}</td>
            </tr>
          );
        })}
      </table>
    </header>
  );
};

export default contentEditor;
