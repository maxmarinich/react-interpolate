## React Interpolate Plugin

#### Smart interpolation for react components.

### Peer Dependencies
* React >=16.2

### API
*  `interpolate(key: string, params: Array<any>): string | Array<any>`  - Interpolate values with specified parameters

## How to use

```apacheconfig
npm i react react-interpolate-plugin
```

```javascript
    import React from 'react';
    import interpolate from 'react-interpolate-plugin';

    const key = 'Some {0} for {1} {2}.';
    const element = <span>smart</span>;
    const Component = () => <span onClick={console.log}>interpolation</span>;
    
    const Example = () => {
      return interpolate(key, ['text', element, <Component key="component" />])
    }

    
    // Result:
    // Some text for smart interpolation.
    
```


#### Test
```apacheconfig
npm test
```

#### License

MIT
