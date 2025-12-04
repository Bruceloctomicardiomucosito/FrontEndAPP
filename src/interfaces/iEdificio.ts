export interface Edificio {
    idEdificio: number,
    nombre: string,
    numeroPisos: 0,
    funcion: string,
    observaciones: string
}

export interface EdificiosResults{
    count: number,
    next: string,
    previus?: string,
    results: Edificio[]
}