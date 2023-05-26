async function grab() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`Status ${response.status}, ${response.type} error`);
    }
    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error(error);
  }
}

grab();
