type AnyCharGenerator = Generator<string, string, undefined>;

function* generator({
  chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  startAt = "",
}: AnyCharOptions = {}): AnyCharGenerator {
  if (chars.length === 0) {
    return "";
  }

  const base = chars.length;

  let indexes =
    startAt.length > 0
      ? startAt.split("").map((char) => chars.indexOf(char))
      : [0];

  if (indexes.indexOf(-1) !== -1) {
    indexes = [0];
  }

  while (true) {
    let result = "";

    for (let index = 0; index < indexes.length; index++) {
      result += chars[indexes[index]];
    }

    yield result;

    let position = indexes.length - 1;

    while (position >= 0) {
      indexes[position]++;

      if (indexes[position] < base) {
        break;
      }

      indexes[position] = 0;

      if (position === 0) {
        indexes.unshift(0);
        break;
      }

      position--;
    }
  }
}

export interface AnyCharOptions {
  chars?: string;
  startAt?: string;
}

export class AnyChar {
  private readonly generator: AnyCharGenerator;

  constructor(options?: AnyCharOptions) {
    this.generator = generator(options);
  }

  next(): string {
    return this.generator.next().value;
  }
}
