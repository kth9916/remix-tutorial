import {getStory} from "../../lib/api";
import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export const loader = async ({ params }) => {
    const { id } = params;
    const data = await getStory(id);
    return json(data);
};

const Story = () => {
    const story = useLoaderData();
    return (
        <div>
            <h1>{story.title}</h1>
            <p>{story.body}</p>
        </div>
    )
};

export default Story;