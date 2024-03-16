import { API_DOMAIN } from "@/constants";

class MyCustomError extends Error {
    constructor(status, msg) {
        super(msg);
        this.status = status;
        this.name = "MyCustomError";
    }
}

const APIConnection = async (method, endpoint, data = {}) => {

    try {
        
        let requestConfig = {
            method,
            mode: "cors", 
            cache: "no-cache",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        }

        if (method !== "GET" && method !== "HEAD") requestConfig = { ...requestConfig, body: JSON.stringify(data) };

        const res = await fetch(API_DOMAIN + endpoint, requestConfig);
        
        if (!res.ok) {
            const errorBody = await res.json();
            throw new MyCustomError(res.status, errorBody.message);
        }
        
        const body = await res.json();
        return { status: 200, ...body };

    } catch (error) {
        if (error.name === "MyCustomError") return { status: error.status, message: error.message };
        return { status: 500, message: "Se ha producido un error al conectar con la aplicación." };   
    }
}

export default APIConnection;