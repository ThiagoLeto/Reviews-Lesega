export function camelCaseToSpacedString(inputString: string) {
    const spacedString = inputString.replace(/([a-z0-9])([A-Z0-9])/g, `$1 $2`)
    return spacedString.toLowerCase().split(" ")[0][0].toUpperCase() +
        spacedString.toLowerCase().slice(1)
}

export function pascalCaseToSpacedString(inputString: string) {
    //inputString.replace(/(?<=[a-zA-Z0-9])(?=[A-Z0-9])/g) //(/([a-z][0-9])([A-Z][0-9])/g, `$1 $2`)
    return inputString.replace(/([A-Z0-9])/g, ' $1').trim()
}