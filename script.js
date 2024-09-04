// // Function to read the Excel file and process the data
// function handleFile(event) {
//   const file = event.target.files[0];
//   const reader = new FileReader();

//   reader.onload = function (e) {
//     const data = new Uint8Array(e.target.result);
//     const workbook = XLSX.read(data, { type: "array" });
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];
//     const json = XLSX.utils.sheet_to_json(sheet);

//     window.data = json; // Store data in global scope for access
//   };

//   reader.readAsArrayBuffer(file);
// }

// // Function to search the data by ID
// function searchData() {
//   const id = document.getElementById("searchID").value;
//   const resultDiv = document.getElementById("result");

//   if (!window.data) {
//     alert("Por favor, cargue un archivo primero.");
//     return;
//   }

//   const item = window.data.find((row) => row.ID == id);

//   if (item) {
//     document.getElementById(
//       "type"
//     ).textContent = `Tipo de objeto: ${item["Tipo de objeto"]}`;
//     document.getElementById(
//       "quantity"
//     ).textContent = `Cantidad: ${item["Cantidad"]}`;
//     document.getElementById(
//       "availability"
//     ).textContent = `Disponible: ${item["Disponible"]}`;
//   } else {
//     document.getElementById("type").textContent = "No encontrado";
//     document.getElementById("quantity").textContent = "";
//     document.getElementById("availability").textContent = "";
//   }
// }

// document.getElementById("fileInput").addEventListener("change", handleFile);
// Function to load the JSON data from the file
function loadData() {
  fetch("data.json")
    .then((response) => response.json())
    .then((json) => {
      window.data = json; // Store data in global scope for access
    })
    .catch((error) => {
      console.error("Error loading the JSON file:", error);
    });
}

// Function to search the data by ID
function searchData() {
  const id = document.getElementById("searchID").value;
  const resultDiv = document.getElementById("result");

  if (!window.data) {
    alert("Datos no cargados correctamente.");
    return;
  }

  const item = window.data.find((row) => row.ID == id);

  if (item) {
    document.getElementById(
      "type"
    ).textContent = `Tipo de objeto: ${item["Tipo de objeto"]}`;
    document.getElementById(
      "quantity"
    ).textContent = `Cantidad: ${item["Cantidad"]}`;
    document.getElementById(
      "availability"
    ).textContent = `Disponible: ${item["Disponible"]}`;
  } else {
    document.getElementById("type").textContent = "No encontrado";
    document.getElementById("quantity").textContent = "";
    document.getElementById("availability").textContent = "";
  }
}

// Load the JSON data when the page loads
window.onload = loadData;
