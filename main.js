function process_argv() {
  const { argv } = process;
  const result = krsApplication(argv[2], argv[3], argv[4]);

  return result;
}

function krsApplication(name, programId, gpa) {
  let sks = 0;
  let result = "";
  if (gpa >= 2.99 && gpa <= 4) {
    sks = 24;
  } else if (gpa >= 2.5 && gpa < 2.99) {
    sks = 21;
  } else if (gpa >= 2 && gpa < 2.5) {
    sks = 18;
  } else if (gpa >= 1.5 && gpa < 2) {
    sks = 15;
  } else if (gpa >= 0 && gpa < 1.5) {
    sks = 12;
  } else if (gpa < 0 && gpa > 4) {
    ("Invalid gpa number");
  }

  switch (gpa) {
    case gpa >= 3:
      result = `txt Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
      break;

    case gpa < 3:
      result = `txt Hallo ${name}, berdasarkan IP semester lalu sebesar ${gpa}, kamu diwajibkan melakukan bimbingan dengan dosen pembimbing pada prodi <nama prodi> dan hanya dapat mengambil SKS sebanyak ${sks} SKS untuk semester depan.`;
  }
  return result; // TODO: replace this
}

// Dilarang menghapus/mangganti code dibawah ini!!!
if (process.env.NODE_ENV !== "test") {
  console.log(process_argv());
}

module.exports = krsApplication;
