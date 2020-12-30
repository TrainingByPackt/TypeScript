var blogPostClass = /** @class */ (function () {
    function blogPostClass() {
        this.allPost = [];
    }
    blogPostClass.prototype.addToPost = function (post) {
        console.log(this.allPost);
        this.allPost = this.allPost.concat([
            post
        ]);
        return this.allPost;
    };
    return blogPostClass;
}());
var blog = new blogPostClass;
var post1 = { post: 'bye to 2020', timeStamp: 12345678, user: 'rayon' };
var post2 = { post: 'welcome 2021', timeStamp: 12345678, user: 'mark' };
var post3 = { post: 'what happened to 1999', timeStamp: 12345678, user: 'willam' };
blog.addToPost(post1);
blog.addToPost(post2);
blog.addToPost(post3);
console.log(blog.allPost);
