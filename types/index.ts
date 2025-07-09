export type Artwork = {
    src: string;
    type: 'gif' | 'youtube';
}

export type Project = {
    title: string;
    // subtitle: string;
    headImage: string;
    // key: string;
    // intro: string;
    link?: string;
    // body: string;
    // description: string;
    // artwork: Artwork;
    // client: {
    //     name: string;
    //     position: string;
    //     logo: string;
    // };
    tags: string[]
}
