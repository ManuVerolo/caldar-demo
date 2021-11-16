import Main from "../layout/layout-components/Main"
const Calderas = () => {
    const headers = ([
        {
            id: 1,
            text: 'Numero Caldera',
        },
        {
            id: 2,
            text: 'Nombre Caldera',
        },
      ])
    const rows = ([
        {
            id: 1,
            text: 'Caldera numero 1',
        },
        {
            id: 2,
            text: 'Caldera numero 2',
        },
        {
            id: 3,
            text: 'Caldera numero 3',
        },
        {
            id: 4,
            text: 'Caldera numero 4',
        },
        {
            id: 5,
            text: 'Caldera numero 5',
        },
        {
            id: 6,
            text: 'Caldera numero 6',
        },
    ])
    return (
       <div>
           <Main title="Calderas" headers={headers}  rows={rows}/>           
       </div>
    )
}
export default Calderas
