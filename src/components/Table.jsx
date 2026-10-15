import Card from "./Card";

const Table = ({ columns = [], data = [] }) => {
  return (
    <Card>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-187.5 border-collapse">
          <thead className="bg-emerald-50 text-sm text-emerald-600">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left font-medium">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((row, value) => (
              <tr
                className="border-b text-[12px] text-gray-600"
                key={row.id ?? value}
              >
                {columns.map((col) => (
                  <td
                    className={`px-4 py-3 ${col.className ?? ""}`}
                    key={col.key}
                  >
                    {col.cell ? col.cell(row[col.key], row) : row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Table;
