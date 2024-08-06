import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";


const PostContext = createContext()

function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}
const MyProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );

    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )
            : posts;
    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        console.log("clear me")
        setPosts([]);
    }

    return (
        <PostContext.Provider value={{ searchQuery, setSearchQuery, posts, setPosts, searchedPosts, handleAdd:handleAddPost, handleClear:handleClearPosts }}>
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, MyProvider }