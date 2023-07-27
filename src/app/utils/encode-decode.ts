export default function encode(data:any){
    const toStr= JSON.stringify(data)
    return {"param":btoa(toStr)}
}