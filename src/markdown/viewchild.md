---
slug: '/wil/viewchild'
date: '2021-04-05'
title: 'ViewChild'
published: true
tag: pass-data
---

# @ViewChild()

- import ViewChild
- @ViewChild('arg')
- passing in local reference to methods or to templates

```HTML
<input #ref>
```

## Pass in a local ref as string from HTML file:

```ts
import { ViewChild } from '@angular/core';

export class SomeClass implements OnInit {
  newServerInput: '';

  @ViewChild('ref') serverContentInput;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(){
    serverContent: this.newServerInput
  }
}
```

## Or you can pass in a component instead

```ts
@ViewChild(SomeComponent) serverContentInput;
```

Now we have access to the serverContent Input from our local reference.

`serverContentInput` is now an ElementRef so we can set the property

```ts
@ViewChild(SomeComponent) serverContentInput: ElementRef;
```

`ElementRef` then should be imported from `@Angular/core`

- now we can access it by using `nativeElement`

```ts
  onAddServer(){
    serverContent: this.serverContentInput.nativeElement.value
  }
```

- Do not change the element value from template since you will change the default value of the element.
- Accessing the DOM this way is not good.
- Better way is learned in the `Directive` section or use string interpolations or property binding instead.
