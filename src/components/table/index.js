const Table = ({ datos }) => {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Celular</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato, index) => (
            <tr key={index}>
              <td>{dato.nombre}</td>
              <td>{dato.apellido}</td>
              <td>{dato.celular}</td>
              <td>{dato.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
