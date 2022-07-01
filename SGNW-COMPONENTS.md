[Read Me](README.md) | 
[Using the Components](USAGE.md) | 
[&lt;sgnw-components />](SGNW-COMPONENTS.md) | 
[&lt;fsw-components />](FSW-COMPONENTS.md) | 
[Change Log](CHANGELOG.md)

---

# Sutton SignWriting Web Components

**&lt;sgnw-components /&gt;** use [SignWriting in Unicode (SWU)](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-09.html#name-signwriting-in-unicode-swu) characters.

- [sgnw-symbol](#sgnw-symbol)
- [sgnw-sign](#sgnw-sign)

---

## sgnw-symbol

the sgnw-symbol element can be used to create a symbol image

### sgnw-symbol with text inside
<sgnw-symbol>񄵡</sgnw-symbol>

    <sgnw-symbol>񄵡</sgnw-symbol>

### fsw-symbol with symbol attribute
<sgnw-symbol symbol="񄵡"></sgnw-symbol>

    <sgnw-symbol symbol="񄵡"></sgnw-symbol>

<!-- Auto Generated Below -->


### Properties

| Property  | Attribute | Description              | Type     | Default     |
| --------- | --------- | ------------------------ | -------- | ----------- |
| `styling` | `styling` | Style String for symbol  | `string` | `undefined` |
| `symbol`  | `symbol`  | SWU character for symbol | `string` | `undefined` |


----------------------------------------------



## sgnw-sign

the sgnw-sign element can be used to create a sign image

### sgnw-sign with text inside
<sgnw-sign>𝠀񁳴񁳶񉌍񉌕񁳲񁳸𝠃𝤭𝤩񁳼𝣭𝣤񁳴𝤉𝣤񉌍𝤡𝣺񉌕𝣠𝣺񁳺𝣭𝤑񁳲𝤉𝤑</sgnw-sign>

    <sgnw-sign>𝠀񁳴񁳶񉌍񉌕񁳲񁳸𝠃𝤭𝤩񁳼𝣭𝣤񁳴𝤉𝣤񉌍𝤡𝣺񉌕𝣠𝣺񁳺𝣭𝤑񁳲𝤉𝤑</sgnw-sign>

### sgnw-sign with sign attribute
<sgnw-sign sign="𝠀񁳴񁳶񉌍񉌕񁳲񁳸𝠃𝤭𝤩񁳼𝣭𝣤񁳴𝤉𝣤񉌍𝤡𝣺񉌕𝣠𝣺񁳺𝣭𝤑񁳲𝤉𝤑"></sgnw-sign>

    <sgnw-sign sign="𝠀񁳴񁳶񉌍񉌕񁳲񁳸𝠃𝤭𝤩񁳼𝣭𝣤񁳴𝤉𝣤񉌍𝤡𝣺񉌕𝣠𝣺񁳺𝣭𝤑񁳲𝤉𝤑"></sgnw-sign>

<!-- Auto Generated Below -->


### Properties

| Property  | Attribute | Description           | Type     | Default     |
| --------- | --------- | --------------------- | -------- | ----------- |
| `sign`    | `sign`    | SWU string for sign   | `string` | `undefined` |
| `styling` | `styling` | Style String for sign | `string` | `undefined` |


----------------------------------------------


