export interface BlogPost {
    id: number;
    title: string;
    shortText: string;
    longText: string;
    imagePath?: string;
    date: Date;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'Why You Should Use WSL',
        shortText: 'Its Great!',
        longText: "You get the best of two OS'es",
        date: new Date('2022-05-22')
    },

    {
        id: 2,
        title: 'Why You Should Use WSL 2',
        shortText: 'Its Great!',
        longText: "You get the best of two OS'es",
        date: new Date('1998-05-22')
    },

    {
        id: 3,
        title: 'Why You Should Use WSL 3',
        shortText: 'Its Great!',
        longText: "You get the best of two OS'es",
        date: new Date('2021-10-20')
    },
]