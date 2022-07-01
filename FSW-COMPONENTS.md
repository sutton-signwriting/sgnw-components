[Read Me](README.md) | 
[Using the Components](USAGE.md) | 
[&lt;sgnw-components />](SGNW-COMPONENTS.md) | 
[&lt;fsw-components />](FSW-COMPONENTS.md) | 
[Change Log](CHANGELOG.md)

---

# Formal SignWriting Web Components

**&lt;fsw-components /&gt;** use [Formal SignWriting in ASCII (FSW)](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-09.html#name-formal-signwriting-in-ascii) characters.

- [fsw-symbol](#fsw-symbol)
- [fsw-sign](#fsw-sign)

---

## fsw-symbol

the fsw-symbol element can be used to create an symbol image

### fsw-symbol with text inside
<fsw-symbol>S10000</fsw-symbol>

    <fsw-symbol>S10000</fsw-symbol>

### fsw-symbol with symbol attribute
<fsw-symbol symbol="S10020"></fsw-symbol>

    <fsw-symbol symbol="S10020"></fsw-symbol>

<!-- Auto Generated Below -->


### Properties

| Property  | Attribute | Description              | Type     | Default     |
| --------- | --------- | ------------------------ | -------- | ----------- |
| `styling` | `styling` | Style String for symbol  | `string` | `undefined` |
| `symbol`  | `symbol`  | FSW character for symbol | `string` | `undefined` |


----------------------------------------------



## fsw-sign

the fsw-sign element can be used to create a sign image

### fsw-sign with text inside
<fsw-sign>AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475</fsw-sign>

    <fsw-sign>AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475</fsw-sign>

### fsw-sign with sign attribute
<fsw-sign sign="AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475"></fsw-sign>

    <fsw-sign sign="AS10011S10019S2e704S2e748M525x535S2e748483x510S10011501x466S2e704510x500S10019476x475"></fsw-sign>


<!-- Auto Generated Below -->


### Properties

| Property  | Attribute | Description           | Type     | Default     |
| --------- | --------- | --------------------- | -------- | ----------- |
| `sign`    | `sign`    | FSW string for sign   | `string` | `undefined` |
| `styling` | `styling` | Style String for sign | `string` | `undefined` |


----------------------------------------------


