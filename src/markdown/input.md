---
slug: '/wil/input'
date: '2021-04-06'
title: 'Input'
published: true
tag: input
---

## @Input()

- "Data from Parent to child component"
  - `@Input()` is a decorator.

Import @Input() decorator

```ts
import { Component, Input } from '@angular/core';
```

Then, we invoke it inside the class set a property (which can be anything)
Here I'll call it `reviews` which will be used to get the value from the parent.
And we'll set the type to number.

```ts
export class ChildComponent {
  @Input() reviews: number;
}
```

In the parent component, `bookReviews: 15` is the property in the class

```ts
export class ParentComponent {
  books: any[] = [
    {
      bookReviews: 15,
    },
  ];
}
```

In order for us to gain access to the property inside the parent component is to make a `property binding` inside the parent-component.html

```ts
<div>
  <child [reviews]="book.bookReviews">
  </child>
</div>
```

Now we can get the property value

```html
<div>
  <p>{{ reviews }}</p>
</div>
```
