# fsw-palette-symbol

The fsw-palette-symbol component is used inside the fsw-palette.

## Basic Example

<fsw-palette-symbol style="height:5rem;width:5rem;display:inline-block" symbol="S10000"></fsw-palette-symbol>

    <fsw-palette-symbol symbol="S10000"></fsw-palette-symbol>

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description        | Type     | Default     |
| -------- | --------- | ------------------ | -------- | ----------- |
| `symbol` | `symbol`  | FSW key for symbol | `string` | `undefined` |


## Events

| Event                | Description                             | Type                                                                       |
| -------------------- | --------------------------------------- | -------------------------------------------------------------------------- |
| `paletteSymbolClick` | click event for the symbol palette      | `CustomEvent<string>`                                                      |
| `paletteSymbolDrop`  | drop event for the signbox and sequence | `CustomEvent<{ encoding: string; symbol: string; x: number; y: number; }>` |


## Dependencies

### Used by

 - [fsw-palette](../fsw-palette)

### Graph
```mermaid
graph TD;
  fsw-palette --> fsw-palette-symbol
  style fsw-palette-symbol fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


