import { post, get, remove } from "./requester";

export async function getAllPosts() {
    const posts = await get('/posts');
    return posts;
}
export async function createPost(text, picture) {
    const Post = await post('/posts', { text, picture });
    return Post;
}
export async function getPostsByUser(userId) {
    const posts = await get(`/posts/user/${userId}`);
    return posts;
}
export async function getBookmarksByUser() {
    const bookmarks = await get('/posts/bookmarks');
    return bookmarks;
}
export async function setBookmark(postId){
    await post('/posts/bookmarks', { postId });
}
export async function likePost(postId) {
    const res = await post(`/posts/${postId}/like`);
    return res;
}
export async function unlikePost(postId) {
    const res = await post(`/posts/${postId}/unlike`);
    return res;
}
export async function deletePost(postId) {
    const post = await remove(`/posts/${postId}`);
    return post;
}