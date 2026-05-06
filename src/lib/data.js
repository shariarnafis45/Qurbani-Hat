export const getAnimals = async () => {
  const res = await fetch("https://qurbani-hat-api.onrender.com/animals");
  const data = await res.json();
  return data;
};
export const getAnimalDetails = async (id) => {
  const res = await fetch(`https://qurbani-hat-api.onrender.com/animals/${id}`);
  const data = await res.json();
  return data;
};
