---
slug: '/wil/output'
date: '2021-04-06'
title: 'Output'
published: true
tag: Output
---
# @Output()

- `@Output()` is used to send custom `events` outside.
- Send information from the `child component `to` parent component` and `display` it inside the `parent` component.

## What is EventEmitter?

- EventEmitter is an object that listens on `emits` event from the `child component` which is called an `observer pattern`

## The process

1. Create an event emitter called "notify" in the child component
2. The child component becomes a `publisher` which uses the `emit` method to send data up to the `parent component`
3. The `parent component` becomes a subscriber to the `notify output`
4. Now the parent component can use it in a `method` defined in the parent component

```ts:child-comp.ts
import { Output, EventEmitter } from '@angular/core'

export class ChildComponent {
  Output() notify: = new EventEmitter<string>();
}
```

When the button is clicked

```html:child-comp.html
<div
  (click)="onClick()">
  <button>Click me</button>
</div>
```

Event watcher `(notify)` gets triggered

```html:parent-component.html
<div><p>{{ showMessage }}</p>
<ChildComponent (notify)="onNotifyClicked($event)">
</ChildComponent></div>
```

onClick() method is triggered and the `$event` property is going to store the message from the `onClick()` method

```ts:child-comp.ts
export class ChildComponent {
  Output() notify: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void{
    this.notify.emit('Message from child')
  }
}
```

Which is `'message from child'`

Now, we can make that message appear in the `parent component` through `{{ showMessage }}`

```html:parent-component.html
<div><p>{{ showMessage }}</p>
<ChildComponent (notify)="onNotifyClicked($event)">
</ChildComponent></div>
```

`onNotifyClicked($event)` is initiated in the `parent component`

```ts:parent-comp.ts
export class ParentComponent{

  onNotifyClicked(message: string): void {
    this.showMessage = message;
  }
}
```