import {createStory, getStories} from "../../lib/api";
import {json, redirect, writeAsyncIterableToWritable} from "@remix-run/node";
import {Form, Link, useLoaderData, useTransition} from "@remix-run/react";
import {useEffect, useRef} from "react";

export const loader = async () => {
    const stories = await getStories();
    return json(stories);
};

export const action = async ({ request }) => {
    const formData = await request.formData();
    const title = formData.get('title');
    const body = formData.get('body');
    const story = await createStory({title, body});
    return redirect(`/stories/${story.id}`);
}

const Stories = () => {
    const stories = useLoaderData();
    const transition = useTransition();

    const ref = useRef();
    useEffect(() => {
        if(transition.state === 'submitting') {
            ref.current?.reset();
        }
    }, [transition.state])

    return (
        <div>
            <h1>Stories</h1>
            <ul>
                {stories.map((story) => (
                    <li key={story.id}>
                        <Link to={`/stories/${story.id}`}>{story.title}</Link>
                    </li>
                ))}
            </ul>
            <Form method="post" ref={ref}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        width: 320,
                    }}
                >
                    <input type="text" name="title" placeholder="제목을 입력하세요..." />
                    <textarea name="body" placeholder="이야기를 입력하세요..." />
                    <button type="submit">
                        {transition.state === 'submitting' ? '등록 중...' : '등록'}
                    </button>
                </div>
            </Form>
        </div>
    );
}

export default Stories;