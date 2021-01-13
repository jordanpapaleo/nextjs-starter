---
to: <%= path || actionfolder %>/<%= name %>/<%= h.changeCase.camel(name) %>.md
---
# <%= name %> Component

## Example Use

```javascript
import <%= name %> from 'components/<%= name %>'

const SomeComponent = () => {
  return (
    <<%= name %> />
  )
}
```

## Props

### Type

```javascript
type PropsT = {

}
```

### Default Props

```javascript
const {

} = props
```
