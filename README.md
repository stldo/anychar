# anychar ![License][1] [![npm][2]][3]

- **Incremental string generator** for producing sequential, unique IDs
- **TypeScript-ready**, shipped with built-in type definitions
- Fully **customizable** character set
- Can be resumed from **any starting ID**
- Lightweight, with zero external dependencies

## Installation

```bash
npm install anychar
```

### `new AnyChar(options?)`

Instantiates an incremental string generator. Every call to [`next()`](#next) produces the next string in the sequence, cycling through the configured character set like a base-N counter cycles through digits.

||Description|Default|
|---|---|---|
|`options.chars`|The set of characters used to construct the generated strings.|A string containing digits (0-9), uppercase letters (A-Z), and lowercase letters (a-z).|
|`options.startAt`|The first value the generator will produce.|`""`|

```javascript
import { AnyChar } from "anychar";

const anyChar = new AnyChar();

anyChar.next();
// "0"

anyChar.next();
// "1"

anyChar.next();
// "2"
```

### `next()`

Generates the next string in the sequence.

```javascript
import { AnyChar } from "anychar";

const anyChar = new AnyChar({ chars: "ab" });

anyChar.next();
// "a"

anyChar.next();
// "b"

anyChar.next();
// "aa"

anyChar.next();
// "ab"

anyChar.next();
// "ba"
```

```javascript
import { AnyChar } from "anychar";

const anyChar = new AnyChar({ startAt: "z" });

anyChar.next();
// "z"

anyChar.next();
// "A"
```

## License

[The MIT License][license]

Copyright (C) 2026-present stldo

[1]: https://img.shields.io/github/license/stldo/anychar
[2]: https://img.shields.io/npm/v/anychar
[3]: https://www.npmjs.com/package/anychar
[license]: ./LICENSE
