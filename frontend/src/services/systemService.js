import api from "./api";

export const healthCheck = async () => {
    return await api.get("/health");
};

export const dbCheck = async () => {
    return await api.get("/db-check");
};