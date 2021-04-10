---
slug: '/wil/local-reference-in-templates'
date: '2021-04-05'
title: 'Using local references in templates'
published: true
tag: pass-data
---

## Local references

- Local references are accessed ONLY in the template.
- Accessed anywhere in the template.

### Setting local ref

You can set a local reference

```html
<div>
  <ng-content></ng-content>
</div>
```

and change the props to ngFor loop

```ts
<div>
  <app-component *ngFor="let someThing of someThings" [smThing]="someThings">
    // code from the app component here.
  </app-component>
</div>
```

This is useful if you're building or implementing a re-usable widget.
with `#`

```html
<input #ref />
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
