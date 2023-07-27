export function encode(data:any){
    const toStr= JSON.stringify(data)
    return {"param":btoa(toStr)}
}

export function decode(data:any){
    return atob(data)
}
