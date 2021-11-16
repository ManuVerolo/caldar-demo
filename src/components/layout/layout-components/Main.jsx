import '../layout-components/Layout.css'
const Main = ({title, headers, rows}) => {

    return (
    <div className="container">
        <h2>{title}</h2>
        <table>
        <thead>
            <tr>
            {headers.map((header) => 
                <th key={header.id}>{header.text}</th>
            )}
            </tr>
        </thead>
        
            {rows.map((row) => 
            <tr>
                <td key={row.id}>{row.id}</td>
                <td key={row.id}>{row.text}</td>
            </tr>
            )}
        
        </table>
    </div>
    )
}
export default Main
