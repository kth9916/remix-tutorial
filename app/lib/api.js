import axios from "axios";

const getUsers = async () => {
    const response = await axios.get(
        'http://jsonplaceholder.typicode.com/users'
    );
    return response.data;
}

const getUser = async (id) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.data;
}

const getStories = async () => {
    const response = await axios.get('http://localhost:4000/stories');
    return response.data;
}

const getStory = async (id) => {
    const response = await axios.get(`http://localhost:4000/stories/${id}`);
    return response.data;
}

const createStory = async ({ title, body }) => {
    const response = await axios.post('http://localhost:4000/stories', {
        title,
        body,
    });
    return response.data;
}



export { getUser, getUsers, getStories, getStory, createStory };