const Form = () => {
  const prodies = [
    "Ekonomi",
    "Manajemen",
    "Akuntansi",
    "Administrasi Publik",
    "Administrasi Bisnis",
    "Hubungan Internasional",
    "Teknik Sipil",
    "Arsitektur",
    "Matematika",
    "Fisika",
    "Informatika",
  ];
  return (
    <form id="form-student">
      <label>
        Fullname
        <input type="text" id="input-name" />
      </label>
      <label>
        Birth Date
        <input type="date" id="input-date" />
      </label>
      <label>
        Gender
        <select name="Gender" id="input-gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Program Study
        <select name="program-study" id="input-prody">
          {prodies.map((prody) => (
            <option key={prody} value={prody}>
              {prody}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" id="add-btn" value={"Add student"} />
    </form>
  );
};

export default Form;
