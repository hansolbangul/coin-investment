const BaseUrl = `https://`;

export const fetchPost = async (uri: string) => {
    const response = await (await fetch(uri)).json();
    return response;
};