async function f() {
    const result = await fetch ('https://random-data-api.com/api/company/random_company')
    const json = await result.json();
    console.log(json)
}

console.log(f())