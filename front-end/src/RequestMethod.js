import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODVjOTNkYzM5ZmU4NzVmYmEyOWM5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTQ0OTgxOSwiZXhwIjoxNjg1MzY5ODE5fQ.rVIEdQVYVCOwvNYUxHwU1WbkCPq3vVfVKu1tdKmKosk"

export const publicRequest= axios.create({
    baseURL: BASE_URL,
})


export const UserRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` }
});