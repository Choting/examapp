export interface IServices {
    id: number,
    name: string, 
    icon: string,
    items: IItems
    
}
interface IItems{
    id: number,
    name: string
}
