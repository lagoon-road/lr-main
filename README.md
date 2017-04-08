# lg-core reference

The _lr-core_ package is the only mandatory package for Lagoon road. This package connects everything together, regardless of environment. There are eight exposed functions that you can use.

| Information | - |
| ----------- | - |
| Code coverage | [![Coverage Status](https://coveralls.io/repos/github/lagoon-road/lr-core/badge.svg?branch=master)](https://coveralls.io/github/lagoon-road/lr-core?branch=master) |
| Repo link | [lr-core](https://github.com/lagoon-road/lr-core) |
| Dependencies | [check-types](https://www.npmjs.com/package/check-types) |
| Size (Browserify, Babel, Uglify and Gzip)| 5.3KB |
| Version | 1.0.0 |
| License | MIT |
| Usage | [lagoonroad.com/guide](https://www.lagoonroad.com/guide) |

---

### core(environmentId:string, [options:object])

```
const core = require('lr-core');
const road = core('webserver');
```
When initiating an new road you have to supply one mandatory argument, the environment id. This will be the environment that is the executing environment.

There is also an optional options object where you can specify some settings, they keys of the object are as follows:

**options.parser:object**  
The parser to use when handling the _matchValue_. Read more about parsers in the [guide](https://lagoonroad.com/guide#parsers).

**options.resetAfterCycle:boolean**  
By default the relay object gets cleared after an update cycle of the road, sometimes, mainly on the client, you want to keep the relay populated even if an update cycle has ran. To do so, you can set this boolean to  _false_

---

### road.extension(id:string, extension:*, isUpdater:boolean = false)

```
road.extension('router', router, true);
```
Use the extension method to add new extensions to the road. You need two mandatory arguments to add an extension. Firstly you have to supply an id that you can use to access the extension in all the middleware. Secondly the actual extension code. This can be anything you like.

The third optional argument is a boolean value to tell the core if on initialization the extension needs to be executed. This is typically for extensions that use update events to trigger updates to the road. Read [more information](https://lagoonroad.com/guide#extensions) about extensions in the guide.

> Extensions can be used in middleware via the relay object.
> ```
> module.exports = (next, relay) => {
>  console.log(relay.extensions.extensionName);
>   next();
> }
>```

---

### road.middleware(newMiddleware:object)

```
road.middleware({ bodyParser }, 'bodyParser');
```

You can add middleware to the road by using the middleware method. It needs a single argument that is an object with all the middleware you want to use. This is a single depth object so don't use any nested structures.

Middleware methods can be called multiple times, the middleware will all be added to a single object within the core. Therefore you need to supply unique ids/keys.

> If you have a multitude of middleware functions that you  want to use it might be handy to use a dot notation to  group your middleware.
> ```
> road.middleware({
>   'templating.component.navigation' : require('...'),  
>   'templating.component.home'       : require('...'),  
> });
> ```
> Read more about how to define and use middleware in the [guide](https://lagoonroad.com/guide#middleware).

---

### road.where(environmentId:string, [...environmentId:String])

```
road.where('webserver', 'client');
```
When assigning middleware to the road you might want to switch the environment they need to be assigned to. You can do that by using the where method.

The where method expects at least one argument, which should be a string. This is an environment id to which all the following middleware will be assigned. If you want to assign middleware to multiple environments you can just specify several ids like in the example above.

---

### road.run(matchValue:string, middlewareId:string, [updateType:string])

```
road.run('*', 'log');
```

### road.error(middlewareId:string, [updateType:string])

```
road.error('log')
```

### road.noMatch(middlewareId:string, [updateType:string])

```
road.noMatch('log');
```

### road.done(middlewareId:string, [updateType:string])

```
road.done('response', 'post');
```

### road.update(options:object, [...parameters])

```
road.update({ matchValue : '/somepath', updateType : 'post' })
```
