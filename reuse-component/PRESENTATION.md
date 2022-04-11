---
marp: true
---
# Reaproveitamento de Componentes

---
## Responsabilidade

O que é responsabilidade? E como econtrar uma responsabilidade para ele?

```jsx
(
  <Select />
  <List />
  <Checkbox />
  <Modal />
)
```

Quando recebemos uma feature para ser desenvolvida, temos a tendencia de nos enviesar através de todo o fluxo desta feature. 

---

## Propriedades (data, events)

As propriedades são um aliado no raciocínio sobre a responsabilidade do componente. 
Já parou pra pensar como você gostaria de utilizar este componente onde quer que seja? 

```jsx
(
  <Select 
    items={['Ribeirão Preto', 'São Paulo', 'Curitiba']}
    onSelect={(item) => {
      console.log(`Você selecionou ${itme}`);
    }}
  />
)
```
---

## Prop de callback de eventos

```jsx
const Select = ({ items, onSelect }) => {
    const [selected, setSelected] = useState(0);

    const handleOnClick = (i, item) => {
      setSelected(i);

      onSelect(item)
    }

    return (
      <div>
        {items.map(
          (item, i) => (
            <button selected={i === selected} onClick={() => handleOnClick(i, item)}>{item}</button>
        ))}
      </div>
    )
  }
```
---


### Um componente de listagem não teria somente a responsabilidade de listar?

```jsx
(
  <List 
    items={['Ribeirão Preto', 'São Paulo', 'Curitiba']}
    renderItem={(item) => {
      return <Line>{item}</Line>
    }}
  />
)
```

Podemos sempre encontrar uma responsabilidade única para um componente.

---

## Quando estiver criando um estado dentro de um component sempre se pergunte
Este componente realmente precisa de um estado? Faça esse exercício

---

# Patterns

High Order Component caiu em desuso com a chegada de custom hooks, 
pois essa estratégia era muito utilzada para reaproveitamento de regras de negocios. Hoje com a criação de `custom hooks` você consegue fazer isso. 

---
## HOC

```jsx
  const pockemonConnect = (Comp) => {
    return class Wrapper extends React.Component {
      componentDidMount() {
        this.pockemons = [{ ... }];
      }

      render() {
        <Comp {...this.props} data={this.pockemons} />
      }
    }
  }
```

Mas existem casos que podem fazer sentido utilizar HOCs, por exemplo quando você quer deixar a regra de negócio mais desacoplada do ciclo de vida do componente.


---
## Listagem (HoC)

```jsx
//ShowList
const ShowList = ({ data }) => (
  <List
    items={data}
    renderItem={(item) => <Item>{item.name}</Item>}
  />
)


export const PockemonShowList = pockemonConnect(ShowList)
```

---
## Listagem (uso)

```jsx
//Page
import { PockemonShowList } from './ShowList'

const Page = () => (
  <>
    <header>Pockemón List</header>
    <PockemonShowList />
  </>
)
```
---
## Render props

Como visto o componente List acima, implementação seria algo assim:

```jsx
const List = ({ items, renderItem }) => (
  <ul>
    {items.map(renderItem)}
  </ul>
)
```
---

## Children as function

Children as function, raramente é usado, pois sua aplicação é muito específica. Um exemplo que existe é o `Consumer` do context API do React.
Em algum momento, pode ser que você precise organizar um componente que tenha a responsabilidade de gerenciar um efeito colateral? Não sei. rsrs

---

## Children as function (code)

```jsx
const ScrollPosition = ({ children }) => {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
 return (
    <>
      {children(position)}
    </>
  )
}
```
--- 

## Children as function (uso)
```jsx
const Wrapper = () => (
  <ScrollPosition>
    {(position) => <PockemonList css={{ opacity: position * 100 / 800}} />}
  </ScrollPosition>
)
```
---
## React hooks (custom hook)

Na maioria das vezes react hooks vai solucionar o problema. 

```js
const useScrollPosition = ({ children }) => {
  const [position, setPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
 
 return position;
}
```
---
## React hooks (uso)

```jsx
const Wrapper = () => {
  const position = useScrollPosition();

  return (
    <PockemonList css={{ opacity: position * 100 / 800}} />
  );
}
```
---
## Subcomponents

Com a intenção de separarmos bem as responsabilidades dos componentes, ao mesmo tempo evitando criar muitas propriedades para customização, quando possuimos variações de um componente mais complexo, ou quando os componentes são obrigatórios serem utilizado juntos.

--- 

## Subcomponents 

```jsx
//Link
import { Link as LinkRouter } from "react-router-dom";

const Router = ({ to, text }) => {
  return (
    <LinkRouter to="/">{text}</Link>
  );
}

const Anchor = ({ to, text }) => {
  return (
    <a href="/">{text}</a>
  );
}

export default {
  Router,
  Anchor,
}
```
--- 

## Subcomponents (uso)
```jsx
//Link
import Link from "./Link";

const Wrapper = ({ to, text }) => {
  return (
    <>
      <Link.Router to="/" text="Home" />
      <Link.Anchor to="http://www.google.com" text="Google" />
    </>
  );
}
```
