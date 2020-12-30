type BlogPost = {
    post: string,
    timeStamp: number,
    user: string
}

interface AddToPost {
    (post: BlogPost): BlogPost []
}


interface BlogPostClass {
    allPost: BlogPost [],
    addToPost: AddToPost

}


class blogPostClass implements BlogPostClass{
    allPost: BlogPost [] = []

    addToPost(post: BlogPost): BlogPost[] {
        console.log(this.allPost)
        this.allPost = [
            ...this.allPost,
            post
        ]
        return this.allPost
    }

}


const blog = new blogPostClass;

let post1: BlogPost = {post: 'bye to 2020', timeStamp: 12345678, user: 'rayon'}
let post2: BlogPost = {post: 'welcome 2021', timeStamp: 12345678, user: 'mark'}
let post3: BlogPost = {post: 'what happened to 1999', timeStamp: 12345678, user: 'will'}

blog.addToPost(post1)
blog.addToPost(post2)
blog.addToPost(post3)

console.log(
 blog.allPost
)