export interface FrequnetlyButton {
    size: string | number
    heightSize?: string | number
    color?: string
}

export interface FrequentlyInput {
    placeholder?: string,
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    type: string,
    size?: any
}


export interface RegisterUserInfo {
        name: string,
        authority: number,
        organization: string,
        email?:string,
        password?:string,
        grade?:number,
        classroom?:number,
        tag?:number
}