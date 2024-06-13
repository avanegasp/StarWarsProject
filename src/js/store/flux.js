const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://www.swapi.tech/api/people",
      characters: [],
      planets: [],
    },
    actions: {
      getCharacters: async () => {
        const store = getStore();
        try {
          const response = await fetch(store.apiUrl);
          if (!response.ok) {
            throw new Error("No se puede traer los personajes");
          }
          const data = await response.json();
          console.log("Esto es dataCharacters", data.results);
          setStore({ characters: data.results });
        } catch (e) {
          console.error("Error fetching characters:", e);
        }
      },
    },
  };
};

export default getState;
