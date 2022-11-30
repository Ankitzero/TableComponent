import Table from "./Component/Table";
import jsondata from "./db/tableTestData.json";

function App() {
  const data = JSON.parse(JSON.stringify(jsondata));

  const columnsOne = [
    {
      Header: "Name", 
      accessor: "person", 
      sort: true,
      cell: (e) => <div className="nameContainer">
        <img src={"assets/logo.svg"} alt={"logo_"} />
        <span className="name">{e.person.name}</span>
      </div>
    },
    { Header: "City", accessor: "city", sort: true },
    {
      Header: "Email Address", accessor: "email", sort: true,
      cell: (e) => <a className="href" href="/">{e.email}</a>
    },
    { Header: "Joining Date", accessor: "joiningDate", sort: true },
    { Header: "Role", accessor: "role", sort: true },
  ];
  const columnsTwo = [
    {
      Header: "Name", 
      accessor: "person", 
      sort: true,
      cell: (e) => <div className="nameContainer">
        <img src={"assets/logo.svg"} alt={"logo_"} />
        <span className="name">{e.person.name}</span>
      </div>
    },
    {
      Header: "Email Address", accessor: "email",
      cell: (e) => <a className="href" href="/">{e.email}</a>
    },
    { Header: "Role", accessor: "role" },
  ];
  const columnsThree = [
    {
      Header: "Email Address", accessor: "email",
      cell: (e) => <a className="href" href="/">{e.email}</a>
    },
    { Header: "Joining Date", accessor: "joiningDate", sort: true },
    { Header: "Role", accessor: "role", sort: true },
  ];
  const columnsFour = [
    {
      Header: "Name", 
      accessor: "person", 
      cell: (e) => <div className="nameContainer">
        <img src={"assets/logo.svg"} alt={"logo_"} />
        <span className="name">{e.person.name}</span>
      </div>
    },
    { Header: "City", accessor: "city", sort: true },
    { Header: "Joining Date", accessor: "joiningDate"},
    { Header: "Role", accessor: "role", sort: true },
  ];

  return (
    <div className="container">
      <h3>Table 1</h3>
      <Table dataFromAPI={data} columns={columnsOne} />
      <h3>Table 2</h3>
      <Table dataFromAPI={data} columns={columnsTwo} />
      <h3>Table 3</h3>
      <Table dataFromAPI={data} columns={columnsThree} />
      <h3>Table 4</h3>
      <Table dataFromAPI={data} columns={columnsFour} />
    </div>
  );
}

export default App;
