export default interface IShops {
    id: number
    name: string
    contactPhone: string
    startHour: string
    endHour: string
    createdAt: string
    updatedAt: string
    deletedAt: any
    image_id: number
    image: {
        id: number
        path: string
        resized_path: any
        createdAt: string
        updatedAt: string
        deletedAt: any
    }
}
