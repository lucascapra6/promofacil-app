export interface ISections {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    shop_id: number;
    image_id: number;
    image: {
        id: number;
        path: string;
        resized_path: string | null;
        createdAt: string;
        updatedAt: string;
        deletedAt: string | null;
    }
}
