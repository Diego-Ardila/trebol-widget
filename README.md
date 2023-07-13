# trebol-widget

Es un web component que renderiza un boton que una entidad financiera puede agregar en su aplicacion para redirigir al usuario a una pagina de carga y validacion de documentos. Su implementacion es muy sencilla, simplemente se debe agregar el siguiente script:
- `<script src="https://diego-ardila.github.io/trebol-widget/src/index.js"></script>`

en la parte inferior del `<body />` del HTML de la aplicacion donde se quiera implementar. Una vez hecho esto se podra acceder a nuestro Web component declarandolo con la etiqueta: `<trebol-widget />`, es muy importante tener en cuenta que en esta etiqueta debemos agregar un attributo llamado `clientid` en el cual debemos pasar el id del cliente que esta implementando el widget, quedaria de la siguiente forma:
![image](https://github.com/Diego-Ardila/trebol-widget/assets/67027844/db37df47-614c-47da-b0b6-c823e8ddda0e)

## Notas adicionales
En las aplicaciones React que se quiera implementar vamos a encontrar un error al declarar nuestro widget debido a la sintaxis de JSX que se maneja en las etiquetas, para solucionarlo debemos injectar el widget usando la etiqueta `dangerouslySetInnerHTML` de la siguiente forma: 
```
import React from 'react';
    
const widget = `
  <trebol-widget clientid=2><trebol-widget>
`

const App = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: widget}} />
  )
}

export default App;
```
O usando Typescript podemos modificar el tipo de nuestro widget para que sea compatible, declarando el siguiente fragmento de codigo en el componente donde se va a renderizar el widget:
```
interface TrebolWidgetAttributes extends React.HTMLAttributes<HTMLElement> {
  clientId: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'trebol-widget': React.DetailedHTMLProps<
        TrebolWidgetAttributes,
        HTMLElement
      >;
    }
  }
}
```
