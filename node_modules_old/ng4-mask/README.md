<a href="https://jsdaddy.github.io/ngx-mask">
  <h1 align="center">ng4-mask</h1>
</a>

[![npm](https://img.shields.io/npm/v/ng4-mask.svg)](https://www.npmjs.com/package/ng4-mask)
<a href="https://npmjs.org/ng4-mask">
  <img src="https://img.shields.io/npm/dt/ngx-mask.svg" alt="npm downloads" >
</a>
[![npm](https://img.shields.io/npm/dm/ng4-mask.svg)](https://www.npmjs.com/package/ng4-mask)

## Info

<a href="https://jsdaddy.github.io/ngx-mask">ngx-mask</a> for Angular 4. 

Fixed the issue <a href="https://github.com/JsDaddy/ngx-mask/issues/55">#55</a>.

## Installing

```bash
$ npm install --save ng4-mask
```

## Quickstart

Import **ng4-mask** module in Angular app.

```typescript
import {Ng4MaskModule} from 'ngx-mask'

(...)

@NgModule({
  (...)
  imports: [
    Ng4MaskModule.forRoot(options)
  ]
  (...)
})
```

Then, just define masks in inputs.

#### Usage

```html 
<input type='text' mask='{here comes your mask}' >
```

#### Examples

| mask | example |
| ------- | ------- |
| 9999-99-99 | 2017-04-15 |
| 000.000.000-99 | 048.457.987-98 |
| AAAA | 0F6g |
| SSSS | asDF |

## Mask Options 
You can define your custom options for all directives (as  object in the mask module) or for each (as attributes for directive)
### specialCharacters (string[ ]) 
 We have next default characters:
   
   | character |
   |-----------|
   | / | 
   | ( | 
   | ) |
   | . |
   | : |
   | - |
   | **space** |
   | + | 
   
##### Usage

```html 
<input type='text' specialCharacters="[ '[' ,']' , '*' ]" mask="[00]*[000]" >
```

##### Then:

```
Input value: 789-874.98
Masked value: [78]*[987]
```
   
### patterns ({ [character: string]: { pattern: RegExp, optional?: boolean})
   We have next default patterns:
   
  | code | meaning |
  |------|---------|
  | **0** | digits (like 0 to 9 numbers) |
  | **9** | digits (like 0 to 9 numbers), but optional |
  | **A** | letters (uppercase or lowercase) and digits |
  | **S** | only letters (uppercase or lowercase) |

##### Usage:
 
```html 
<input type='text' patterns="{'0': { pattern: new RegExp('\[a-zA-Z\]')}}" mask="(000-000)" >
```

##### Then:

```
Input value: 789HelloWorld
Masked value: (Hel-loW)
```

### dropSpecialCharacters (boolean) 
   You can choose if mask will drop special character in the model, or not, default value true
##### Usage

```html 
<input type='text' dropSpecialCharacters="false" mask="000-000.00" >
```

##### Then:

```
Input value: 789-874.98
Model value: 789-874.98
```

### clearIfNotMatch (boolean)    
   You can choose clear the input if the input value **not match** the mask, default value false 


## Examples

Check the [demo](https://jsdaddy.github.io/ngx-mask/).
