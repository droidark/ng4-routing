# CHANGING PAGES WITH ROUTING

## Passing Parameters to Routes
```sh
  {path: [path-url-name]/:[paramenter-name], component: [component-name]},
```
## Fetching Route Parameters

> To avoid confusion: The ActivatedRoute object we injected will give us access
> to the id passed in the URL => Selected User.

In the component-file.ts
- Import import ActivatedRoute
```sh
  import { ActivatedRoute } from '@angular/router';
```
- Add parameter to constructor()
```sh
  constructor(private route: ActivatedRoute) { }
```

- On ngOnInit() method, get the parameters with the same method
```sh
  id: this.route.snapshot.params['[param-name]'],
```
