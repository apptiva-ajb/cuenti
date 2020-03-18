/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createObra = /* GraphQL */ `
  mutation CreateObra(
    $input: CreateObraInput!
    $condition: ModelObraConditionInput
  ) {
    createObra(input: $input, condition: $condition) {
      id
      nombre
      fecha
      autor
      generos
      imagen
      capitulos {
        items {
          id
          titulo
        }
        nextToken
      }
      personajes {
        items {
          id
          nombre
          avatar
        }
        nextToken
      }
    }
  }
`;
export const updateObra = /* GraphQL */ `
  mutation UpdateObra(
    $input: UpdateObraInput!
    $condition: ModelObraConditionInput
  ) {
    updateObra(input: $input, condition: $condition) {
      id
      nombre
      fecha
      autor
      generos
      imagen
      capitulos {
        items {
          id
          titulo
        }
        nextToken
      }
      personajes {
        items {
          id
          nombre
          avatar
        }
        nextToken
      }
    }
  }
`;
export const deleteObra = /* GraphQL */ `
  mutation DeleteObra(
    $input: DeleteObraInput!
    $condition: ModelObraConditionInput
  ) {
    deleteObra(input: $input, condition: $condition) {
      id
      nombre
      fecha
      autor
      generos
      imagen
      capitulos {
        items {
          id
          titulo
        }
        nextToken
      }
      personajes {
        items {
          id
          nombre
          avatar
        }
        nextToken
      }
    }
  }
`;
export const createPersonaje = /* GraphQL */ `
  mutation CreatePersonaje(
    $input: CreatePersonajeInput!
    $condition: ModelPersonajeConditionInput
  ) {
    createPersonaje(input: $input, condition: $condition) {
      id
      nombre
      avatar
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
    }
  }
`;
export const updatePersonaje = /* GraphQL */ `
  mutation UpdatePersonaje(
    $input: UpdatePersonajeInput!
    $condition: ModelPersonajeConditionInput
  ) {
    updatePersonaje(input: $input, condition: $condition) {
      id
      nombre
      avatar
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
    }
  }
`;
export const deletePersonaje = /* GraphQL */ `
  mutation DeletePersonaje(
    $input: DeletePersonajeInput!
    $condition: ModelPersonajeConditionInput
  ) {
    deletePersonaje(input: $input, condition: $condition) {
      id
      nombre
      avatar
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
    }
  }
`;
export const createCapitulo = /* GraphQL */ `
  mutation CreateCapitulo(
    $input: CreateCapituloInput!
    $condition: ModelCapituloConditionInput
  ) {
    createCapitulo(input: $input, condition: $condition) {
      id
      titulo
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
      escenas {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const updateCapitulo = /* GraphQL */ `
  mutation UpdateCapitulo(
    $input: UpdateCapituloInput!
    $condition: ModelCapituloConditionInput
  ) {
    updateCapitulo(input: $input, condition: $condition) {
      id
      titulo
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
      escenas {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const deleteCapitulo = /* GraphQL */ `
  mutation DeleteCapitulo(
    $input: DeleteCapituloInput!
    $condition: ModelCapituloConditionInput
  ) {
    deleteCapitulo(input: $input, condition: $condition) {
      id
      titulo
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
      escenas {
        items {
          id
        }
        nextToken
      }
    }
  }
`;
export const createEscena = /* GraphQL */ `
  mutation CreateEscena(
    $input: CreateEscenaInput!
    $condition: ModelEscenaConditionInput
  ) {
    createEscena(input: $input, condition: $condition) {
      id
      capitulo {
        id
        titulo
        obra {
          id
          nombre
          fecha
          autor
          generos
          imagen
        }
        escenas {
          nextToken
        }
      }
      contenidos {
        items {
          id
          tipo
          personajeID
          payload
        }
        nextToken
      }
    }
  }
`;
export const updateEscena = /* GraphQL */ `
  mutation UpdateEscena(
    $input: UpdateEscenaInput!
    $condition: ModelEscenaConditionInput
  ) {
    updateEscena(input: $input, condition: $condition) {
      id
      capitulo {
        id
        titulo
        obra {
          id
          nombre
          fecha
          autor
          generos
          imagen
        }
        escenas {
          nextToken
        }
      }
      contenidos {
        items {
          id
          tipo
          personajeID
          payload
        }
        nextToken
      }
    }
  }
`;
export const deleteEscena = /* GraphQL */ `
  mutation DeleteEscena(
    $input: DeleteEscenaInput!
    $condition: ModelEscenaConditionInput
  ) {
    deleteEscena(input: $input, condition: $condition) {
      id
      capitulo {
        id
        titulo
        obra {
          id
          nombre
          fecha
          autor
          generos
          imagen
        }
        escenas {
          nextToken
        }
      }
      contenidos {
        items {
          id
          tipo
          personajeID
          payload
        }
        nextToken
      }
    }
  }
`;
export const createContenido = /* GraphQL */ `
  mutation CreateContenido(
    $input: CreateContenidoInput!
    $condition: ModelContenidoConditionInput
  ) {
    createContenido(input: $input, condition: $condition) {
      id
      tipo
      personajeID
      payload
      escena {
        id
        capitulo {
          id
          titulo
        }
        contenidos {
          nextToken
        }
      }
    }
  }
`;
export const updateContenido = /* GraphQL */ `
  mutation UpdateContenido(
    $input: UpdateContenidoInput!
    $condition: ModelContenidoConditionInput
  ) {
    updateContenido(input: $input, condition: $condition) {
      id
      tipo
      personajeID
      payload
      escena {
        id
        capitulo {
          id
          titulo
        }
        contenidos {
          nextToken
        }
      }
    }
  }
`;
export const deleteContenido = /* GraphQL */ `
  mutation DeleteContenido(
    $input: DeleteContenidoInput!
    $condition: ModelContenidoConditionInput
  ) {
    deleteContenido(input: $input, condition: $condition) {
      id
      tipo
      personajeID
      payload
      escena {
        id
        capitulo {
          id
          titulo
        }
        contenidos {
          nextToken
        }
      }
    }
  }
`;
