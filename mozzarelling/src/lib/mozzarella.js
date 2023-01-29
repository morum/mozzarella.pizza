const api_url = "https://mozzarella.pizza"

async function getDaily(){
    return await (await fetch(`${api_url}/daily.json`)).json()
}

export {
    getDaily
}