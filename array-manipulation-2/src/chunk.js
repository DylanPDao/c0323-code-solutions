/* exported chunk */
function chunk(array, size) {
  const chunk = [];
  for (let i = 0; i < array.length; i += size) {
    chunk.push(array.slice(i, i + size));
  }
  console.log('chunk:', chunk);
  return chunk;
}
