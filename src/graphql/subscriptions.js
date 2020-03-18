/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateObra = /* GraphQL */ `
  subscription OnCreateObra {
    onCreateObra {
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
export const onUpdateObra = /* GraphQL */ `
  subscription OnUpdateObra {
    onUpdateObra {
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
export const onDeleteObra = /* GraphQL */ `
  subscription OnDeleteObra {
    onDeleteObra {
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
export const onCreatePersonaje = /* GraphQL */ `
  subscription OnCreatePersonaje {
    onCreatePersonaje {
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
export const onUpdatePersonaje = /* GraphQL */ `
  subscription OnUpdatePersonaje {
    onUpdatePersonaje {
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
export const onDeletePersonaje = /* GraphQL */ `
  subscription OnDeletePersonaje {
    onDeletePersonaje {
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
export const onCreateCapitulo = /* GraphQL */ `
  subscription OnCreateCapitulo {
    onCreateCapitulo {
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
export const onUpdateCapitulo = /* GraphQL */ `
  subscription OnUpdateCapitulo {
    onUpdateCapitulo {
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
export const onDeleteCapitulo = /* GraphQL */ `
  subscription OnDeleteCapitulo {
    onDeleteCapitulo {
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
export const onCreateEscena = /* GraphQL */ `
  subscription OnCreateEscena {
    onCreateEscena {
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
export const onUpdateEscena = /* GraphQL */ `
  subscription OnUpdateEscena {
    onUpdateEscena {
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
export const onDeleteEscena = /* GraphQL */ `
  subscription OnDeleteEscena {
    onDeleteEscena {
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
export const onCreateContenido = /* GraphQL */ `
  subscription OnCreateContenido {
    onCreateContenido {
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
export const onUpdateContenido = /* GraphQL */ `
  subscription OnUpdateContenido {
    onUpdateContenido {
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
export const onDeleteContenido = /* GraphQL */ `
  subscription OnDeleteContenido {
    onDeleteContenido {
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
