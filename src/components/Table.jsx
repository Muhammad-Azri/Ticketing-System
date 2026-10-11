const Table = () => {
  const columns = [
    {
      key: "nama",
      header: "Title",
      cell: (value) => value,
    },
    {
      key: "email",
      header: "Alamat Sunting",
      cell: (value) => value,
    },
    {
      key: "kota",
      header: "City",
      cell: (value) => value,
    },
  ];

  const data = [
    {
      nama: "Azri",
      email: "azri@email.com",
      kota: "jkt",
    },
    {
      nama: "Asep",
      email: "asepngebul@email.com",
      kota: "bks",
    },
  ];

  return (
    <table>
      <thead>
        {columns.map((col) => (
          <th key={col.header}>{col.header}</th>
        ))}
      </thead>

      <tbody>
        {data.map((value) => (
          <tr key={value}>
            {columns.map(({ cell, key }) => (
              <td>{cell(value[key], value)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
