---
slug: '/wil/focus-on-load'
date: '2021-04-06'
title: 'Focused input field'
published: true
tag: pass-data, viewchild
---

# How to have mouse focused on an input when page loads

1. Create a `local ref` on a HTML element
2. Create a property of `ElementRef`
3. Attach `@ViewChild` method with `ref variable`
4. Define `ngAfterViewInit()` method with `logic` as for the requirement

1:

```html:app.component.html
<div><input #nameRef></div>
```

2,3

```ts:app.component.ts
import { Component, ViewChild } from '@angular/core';

export class AppComponent {
  @ViewChild('nameRef') nameElementRef: ElementRef;
}
```

4

```ts:app.component.ts
import { Component, ViewChild } from '@angular/core';

export class AppComponent implements AfterViewInit{
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
  }
}
```

By adding a console.log to check out more `methods` and `properties` of `nameElementRef`

```ts:app.component.ts
  ngAfterViewInit() {
    this.nameElementRef.nativeElement.focus();
    console.log( this.nameElementRef );
  }
```

`@ViewChild()` can't be triggered before `ngAfterViewInit` method