const readline = require(`readline`);
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan sebuah kalimat: ", (kalimat) => {
    // gunakan method toLowetCase untuk mengubah kalimat menjadi huruf kecil
    const kalimatLowerCase = kalimat.toLowerCase();
    console.log(`Kalimat dalam huruf kecil: ${kalimatLowerCase}`);
    rl.close();
})