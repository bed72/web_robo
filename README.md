<h1 align="center">
 :robot: R.O.B.O
</h1>

<p align="center">
  <img src="https://vuejs.org/images/logo.png" width="127" alt="Vue Logo" />
</p>

## GraphQL
_Mutação e Query's usadas no Font:_

- Visualizar R.O.B.O:
```
  query {
   robo {
      id
    rotation
      slope
      leftElbow
      leftWrist
      rightElbow
      rightWrist
    }
  }
```
- Criar R.O.B.O (Essa terá que ser executa via Playground GraphQL, para acessa digite seu http://seu_ip:sua_porta/graphql):
```
 mutation {
   createRobo(robo: {
     rotation: initial
     slope: initial
     leftElbow: initial
     leftWrist: initial
     rightElbow: initial
     rightWrist: initial
   }) {
     id
   rotation
     slope
     leftElbow
     leftWrist
     rightElbow
     rightWrist
   }
 }
```
- Atualizar R.O.B.O:
```
  mutation {
   updateRobo(
     id: "2f69baa8-8c2a-45a4-9121-42b076b45c6a"
     robo: {
       rotation: initial
       slope: initial
       leftElbow: initial
       leftWrist: initial
       rightElbow: initial
       rightWrist: initial
     }
   ) {
     id
   rotation
     slope
     leftElbow
     leftWrist
     rightElbow
     rightWrist
   }
 }
```

## Description

[R.O.B.O]  (Binary Operational Robot Oriented).

## :hammer: Installation

```bash
$ yarn
```

## :computer: Running the app

```bash
# development
$ yarn serve
