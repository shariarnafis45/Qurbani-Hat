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

export const getAllAnimalsDataForSorting = async (sort='l-h') => {
  const res = await fetch(
    `https://qurbani-hat-api.onrender.com/animals/?sort=${sort}`,
    { cache: "no-store" },
  );
  const data = await res.json();

  return data;
};
