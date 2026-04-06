export type CommentUser = {
    id: number;
    username: string;
    fullName: string;
};

export type Comment = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: CommentUser;
};

export type CommentsResponse = {
    comments: Comment[];
    total: number;
    skip: number;
    limit: number;
};
