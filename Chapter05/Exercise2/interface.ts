/* eslint-disable no-mixed-spaces-and-tabs */
type BlogPost = {
    post: string,
    timeStamp: number,
    user: string
}

interface AddToPost {
    (post: BlogPost): BlogPost []
}


interface IBlogPostClass {
    allPost: BlogPost [],
    addToPost: AddToPost

}


class blogPostClass implements IBlogPostClass{
    allPost: BlogPost [] = []

    addToPost(post: BlogPost): BlogPost[] {
    	this.allPost = [
    		...this.allPost,
    		post
    	];
    	return this.allPost;
    }

}


const blog = new blogPostClass();

const post1: BlogPost = {post: "bye to 2020", timeStamp: 12345678, user: "rayon"};
const post2: BlogPost = {post: "welcome 2021", timeStamp: 12345678, user: "mark"};
const  post3: BlogPost = {post: "what happened to 1999", timeStamp: 12345678, user: "will"};

blog.addToPost(post1);
blog.addToPost(post2);
blog.addToPost(post3);

console.log(
	blog.allPost
);