# Face company

https://face-company-98y31c3iv-lucasmelo18.vercel.app/
Production Version

## Technologies

<img  src="https://i.imgur.com/xGSdpWC.png"  title="React, Typescript, Nextjs, Sass, Webpack"  >

## Summary

1.  Alias

1.  First Steps

1.  Running Project

1.  Using a alias

1.  Building for production

1.  API Reference


## Alias

We have the following aliases configured in webpack:

- `app-actions` - Reference to `redux/_actions` folder
- `app-components` - Reference to `components` folder
- `app-consts` - Reference to `consts` folder
- `app-hooks` - Reference to `hooks` folder
- `app-images` - Reference to `public/images` folder
- `app-models` - Reference to `models` folder
- `app-services` - Reference to `services` folder
- `app-utils` - Reference to `utils` folder

## First step

Install the dependencies

```bash

npm install

# ou

yarn

```

### Running the project

Run the following command to run the project

```bash

npm run dev

# ou

yarn dev

```

the project will run on port 3000
`http://localhost:3000`


## Alias ​​Usage Example

Inside the `components` folder we have an `index.js` file, which exports all the components we have in the project.

You can import a component using the `app-components` alias that references this folder

Exemple

```js
import { MyComponent } from 'app-components'
```

If you import more than one component, just separate them with a comma

Exemple

```js
import { MyComponent, AnotherComponent } from 'app-components'
```

## Build for production

Execute the command

```bash

npm run build

# ou

yarn build

```

## Tests

Execute the command

```bash

npm test

# ou

yarn test

```

## API reference


This project uses the API below

```bash

https://jsonplaceholder.typicode.com/

```

Developer: Lucas de Melo Lima
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lucasmelo18//)](https://www.linkedin.com/in/lucasmelo18/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luucasmell@gmail.com)](mailto:luucasmell@gmail.com)