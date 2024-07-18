const Table = (props) => {
  return (
    <>
      <div>
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Birth Date</th>
              <th>Gender</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {props.students?.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.fullname}</td>
                <td>{student.birthDate}</td>
                <td>{student.gender}</td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
