function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  let sks, result;
  const prodi = {
    ACC: "Akuntansi",
    HIN: "Hubungan Internasional",
    IAB: "Ilmu Administrasi Bisnis",
    IAP: "Ilmu Administrasi Publik",
    MJN: "Manajemen",
    TKM: "Teknik Kimia",
  };

  if (gpa < 0 || gpa > 4) {
    return "Invalid gpa number";
  }

  if (gpa >= 3) {
    sks = 24;
  } else if (gpa >= 2.5) {
    sks = 21;
  } else if (gpa >= 2) {
    sks = 18;
  } else if (gpa >= 1.5) {
    sks = 15;
  } else if (gpa >= 0) {
    sks = 12;
  }

  if (gpa >= 3)
    result = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  else
    result = `Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi ${prodi[programId]} dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;

  return result; // TODO: replace this
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
