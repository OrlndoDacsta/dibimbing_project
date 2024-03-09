let url = "http://localhost:3000/product/b710890f-4f7e-4946-b3ff-6be7a58d04f0";

// Regular expression to match UUID in the URL
const uuidRegex = /\/product\/([a-f0-9-]+)/;
const match = url.match(uuidRegex);

if (match) {
  const uuid = match[1];
  console.log(uuid);
} else {
  console.log("UUID not found in the URL");
}
