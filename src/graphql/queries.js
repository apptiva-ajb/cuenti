/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getObra = /* GraphQL */ `
  query GetObra($id: ID!) {
    getObra(id: $id) {
      id
      nombre
      fecha
      autor
      generos
      imagen {
        bucket
        region
        key
      }
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
export const listObras = /* GraphQL */ `
  query ListObras(
    $filter: ModelObraFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listObras(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        fecha
        autor
        generos
        imagen {
          bucket
          region
          key
        }
        capitulos {
          nextToken
        }
        personajes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPersonaje = /* GraphQL */ `
  query GetPersonaje($id: ID!) {
    getPersonaje(id: $id) {
      id
      nombre
      avatar
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen {
          bucket
          region
          key
        }
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
export const listPersonajes = /* GraphQL */ `
  query ListPersonajes(
    $filter: ModelPersonajeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonajes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        avatar
        obra {
          id
          nombre
          fecha
          autor
          generos
        }
      }
      nextToken
    }
  }
`;
export const getCapitulo = /* GraphQL */ `
  query GetCapitulo($id: ID!) {
    getCapitulo(id: $id) {
      id
      titulo
      obra {
        id
        nombre
        fecha
        autor
        generos
        imagen {
          bucket
          region
          key
        }
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
export const listCapitulos = /* GraphQL */ `
  query ListCapitulos(
    $filter: ModelCapituloFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCapitulos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titulo
        obra {
          id
          nombre
          fecha
          autor
          generos
        }
        escenas {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEscena = /* GraphQL */ `
  query GetEscena($id: ID!) {
    getEscena(id: $id) {
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
export const listEscenas = /* GraphQL */ `
  query ListEscenas(
    $filter: ModelEscenaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEscenas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        capitulo {
          id
          titulo
        }
        contenidos {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getContenido = /* GraphQL */ `
  query GetContenido($id: ID!) {
    getContenido(id: $id) {
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
export const listContenidos = /* GraphQL */ `
  query ListContenidos(
    $filter: ModelContenidoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContenidos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tipo
        personajeID
        payload
        escena {
          id
        }
      }
      nextToken
    }
  }
`;
