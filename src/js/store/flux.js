const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://swapi.dev/api/",
      characters: [],
      planets: [],
      starships: [],
      character: {},
      planet: {},
      starship: {},
      favorites: [],
    },
    actions: {
      addToFavorite: (id, name) => {
        const store = getStore();
        console.log("desde fluxxxxxxxx", id, name);
        setStore({
          favorites: [...store.favorites, { id, name }],
        });
      },

      removeToFavorite: (id, name) => {
        const store = getStore();
        const filteredFavorite = store.favorites.filter(
          (favorite) => favorite.id !== id
        );
        setStore({ favorites: filteredFavorite });
      },

      getCharacter: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}people/${id}`);
          if (!response.ok) {
            throw new Error("No se puede traer los personajes");
          }
          const data = await response.json();
          setStore({
            character: data,
          });
        } catch (e) {
          console.error("Error fetching character:", e);
        }
      },

      getPlanet: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}planets/${id}`);
          if (!response.ok) {
            throw new Error("No se puede traer los planetas");
          }
          const data = await response.json();
          setStore({
            planet: data,
          });
        } catch (error) {
          console.error("Error fetching planet:", e);
        }
      },

      getStarship: async (id) => {
        const store = getStore();

        try {
          const response = await fetch(`${store.apiUrl}starships/${id}`);
          if (!response.ok) {
            throw new Error("No se puede traer las naves");
          }
          const data = await response.json();
          setStore({
            starship: data,
          });
        } catch (e) {
          console.error("Error fetching starship:", e);
        }
      },

      getCharacters: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}people/`);
          if (!response.ok) {
            throw new Error("No se puede traer los personajes");
          }
          const data = await response.json();
          setStore({ characters: data.results });
        } catch (e) {
          console.error("Error fetching characters:", e);
        }
      },

      getPlanets: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}planets/`);
          if (!response.ok) {
            throw new Error("No se puede traer los planetas");
          }
          const data = await response.json();
          setStore({ planets: data.results });
        } catch (e) {
          console.error("Error fetching planets:", e);
        }
      },

      getStarships: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}starships/`);
          if (!response.ok) {
            throw new Error("No se puede traer los vehículos");
          }
          const data = await response.json();
          setStore({ starships: data.results });
        } catch (e) {
          console.error("Error fetching starships:", e);
        }
      },
    },
  };
};

export default getState;
