# sgnw-palette

The sgnw-palette components allows for access to the symbols of the ISWA 2010.

## Basic Example

<div style="height: 30vh; width: 90%; border: 1px solid yellow;"><sgnw-palette orientation="horizontal" size="small"></sgnw-palette></div>

    <sgnw-palette orientation="horizontal" size="small"></sgnw-palette>

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                       | Type                             | Default       |
| ------------- | ------------- | --------------------------------- | -------------------------------- | ------------- |
| `alphabet`    | `alphabet`    | set of symbols                    | `object \| string`               | `iswa2010SWU` |
| `base`        | `base`        | mid level symbol selection        | `string`                         | `null`        |
| `group`       | `group`       | top level symbol selection        | `string`                         | `null`        |
| `lower`       | `lower`       | flag for small and medium palette | `boolean`                        | `false`       |
| `more`        | `more`        | flag for small palette            | `boolean`                        | `false`       |
| `orientation` | `orientation` | orientation of palette            | `"horizontal" \| "vertical"`     | `"vertical"`  |
| `size`        | `size`        | size of palette                   | `"large" \| "medium" \| "small"` | `"small"`     |


## Dependencies

### Depends on

- [sgnw-button](../sgnw-button)
- [sgnw-palette-symbol](../sgnw-palette-symbol)

### Graph
```mermaid
graph TD;
  sgnw-palette --> sgnw-button
  sgnw-palette --> sgnw-palette-symbol
  style sgnw-palette fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------


