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
## Fetching Route Parameters Reactively

- Read Route Observable

## Passing Query Parameters and Fragments
```sh
  http://localhost:4200/servers/5/edit?allowEdit=1
  [queryParams]="{key: value}"

  http://localhost:4200/servers/5/edit?allowEdit=1#loading
  [queryParams]="{key: value}"
  fragment="loading"
```

## Retrieving Query Parameters and Fragments

### Method 1: Whit snapshot
```sh
this.route.snapshot.queryParams;
this.route.snapshot.fragment;
```

### Method 2: With subscribe
```sh
this.route.queryParams.subscribe();
this.route.fragment.subscribe();
```

## Setting up Child (Nested) Routes

- We use nested child when we want show encapsulate components inside other component

### Steps to create a child route

#### appRoutes object
```sh
  {path: 'parent', component: 'ParentComponent', children: [
    {path: ':children/1', component: 'ChildrenOneComponent'},
    {path: ':children/2', component: 'ChildrenTwoComponent'}
  ]}
```

> The child components need your own <router-outlet></router-outlet> in your parent component

The child components will be loaded in the parent component.

## Configuring the Handling of Query Parameters

### To send
```sh
onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
```

### To recover
```sh
this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    );
```

## Redirecting and Wildcard Routes (404)

- The wilcard to catch all not coindicence is "**".
- The wildcard must be the last item in the appRoute const.


### In appRoute const
```sh
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}
```

## Outsourcing the Route Configuration

- Create new module called [app-routing.module.ts] in app folder.
