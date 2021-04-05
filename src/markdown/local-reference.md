---
slug: '/wil/local-reference-in-templates'
date: '2021-04-05'
title: 'Using local references in templates'
published: true
---

# Local references

- Local references are accessed ONLY in the template.
- Accessed anywhere in the template.
## Setting local ref

You can set a local reference with `#`

```html
<input #ref>
```

You can call the ref in another method by:

```html
<button (click)="someMethod(ref)"></button>
```
Now you can pass the property to the component from the html file by:

```ts
someMethod(nameOfRef: HTMLInputElement){
  console.log('nameOfRef')
}
// OR the value of the reference
someMethod(nameOfRef: HTMLInputElement){
  console.log('nameOfRef.value')
}
```

You can also pass the value in the HTML file by using the string interpolation (only if it's a string):

```html
<div>{{ref}}</div>
```
