export interface IPolicies {
    id: number,
    name: string,
    policy_number: string,
    status: string,
    notice: string,
    items: IItems
}
interface IItems{
    title: string,
    value: string
}

