export interface BlogPost {
    entityId: string;
    title: string;
    description: string;
    post: any;
    postImage: any;
    date: Date;
}

export interface BlogImage {
    contentType: string;
    fileName: string;
    url: string;
    details: {
        image: {
            height: number;
            width: number;
        },
        size: number;
        
    };
}

