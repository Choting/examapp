export interface IAssets {
    assets: Array<IAssetsDescription>
    total: string
}
interface IAssetsDescription{
    id: number,
    name: string,
    amount: string
}
