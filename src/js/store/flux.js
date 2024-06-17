const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://swapi.dev/api/",
      characters: [],
      planets: [],
      starships: [],
      character: {},
      planet: {},
    },
    actions: {
      getCharacter: async (id) => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}people/${id}`);
          if (!response.ok) {
            throw new Error("No se puede traer los personajes");
          }
          const data = await response.json();
          console.log("Esto es data desde character sin S", data);
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
          console.log("Esto es desde Planet sin S", data);
          setStore({
            planet: data,
          });
        } catch (error) {
          console.error("Error fetching planet:", e);
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
          // console.log("Esto es data results desde characters", data.results);
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
          // console.log("Esta es dataResults desde Planets", data.results);
          setStore({ planets: data.results });
        } catch (e) {
          console.error("Error fetching planets:", e);
        }
      },

      getVehicles: async () => {
        const store = getStore();
        try {
          const response = await fetch(`${store.apiUrl}starships/`);
          if (!response.ok) {
            throw new Error("No se puede traer los vehículos");
          }
          const data = await response.json();
          // console.log("esto es data results desde vehicles", data.results);
          setStore({ starships: data.results });
        } catch (e) {
          console.error("Error fetching starships:", e);
        }
      },
    },
  };
};

export default getState;
