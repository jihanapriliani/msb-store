import axios from "axios";

const rajaongkir = axios.create({
    baseURL: "https://api.rajaongkir.com/starter/",
    headers: {
        key: "40c6d7b93242b0e879122a0295854697",
    },
});

export const getProvince = async (province_id) => {
    try {
        const res = rajaongkir.get("/province", {
            params: { id: province_id },
        });

        return (await res).data;
    } catch (error) {
        console.error("Error fetching province:", error);
        throw error;
    }
};

export const getCity = async (city_id) => {
    try {
        const res = rajaongkir.get("/city", {
            params: { id: city_id },
        });

        return (await res).data;
    } catch (error) {
        console.error("Error fetching city:", error);
        throw error;
    }
};

export const getCost = async (data) => {
    await rajaongkir
        .post("/cost", {
            origin: data.origin,
            destination: data.destination,
            weight: data.weight,
            courier: data.courier,
        })
        .then((res) => res)
        .catch((err) => console.log(err));
};
