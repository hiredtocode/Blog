---
slug: '/wil/component-life-cycle'
date: '2021-04-05'
title: 'Component life cycle'
published: true
tag: life-cycle
---

# Understanding Component life cycle

- `ngOnInit(){}` is a life cycle hook.
- When different components are instantiated, ngOnInit() goes into a few different phases. Which will give us some chances to hook into them with methods if they're present.
  1. `ngOnChanges()` could be triggered multiple times. When `@input()` values change.
  2. `ngOnInit()` is executed when the method is is initialized. `ngOnInit()` is ran AFTER the `constructor` runs.
  3. `ngDoCheck()` is triggered every time it detects any changes inside a component. IMPORTANT: Even if nothing changes, when someone clicks on a button or any events, `ngDoCheck` gets triggered since Angular has to check for any status of changes.
  4. `ngAfterContentInit()` is triggered when a content is changed through ng-content from the parent component.
  5. `ngAfterViewInit()` is triggered when the view of the child component has changed.
  6. `ngAfterViewChecked()` is triggered after the view has been checked by Angular.
  7. `ngOnDestroy()` is triggered when code removes a component by Angular and so it's a good idea to construct some "clean-up code" here.

## ngOnChanges

- ngOnChanges needs to be imported.
- `implements OnChanges` from class
- `changes: SimpleChanges` This is the only hook that needs an argument to function

```ts
export class EventBindingComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges) {}
}
```

## Life cycle order

Constructor > OnChanges [element] > Constructor > ngOnInit > ngDoCheck > ngAfterContentInit > ngAfterViewInit > ngAfterViewChecked > ngOnDestroy
