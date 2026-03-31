class TrieNode<T> {
    children: Map<string, TrieNode<T>> = new Map<string, TrieNode<T>>();
    value: T | undefined;
}

class Trie<T> {
    private root: TrieNode<T>;
    private n: number;

    constructor() {
        this.root = new TrieNode<T>();
        this.n = 0;
    }

    insert(key: string, value: T): void {
        let node: TrieNode<T> = this.root;
        for (let c of key) {
            if (!node.children.has(c)) node.children.set(c, new TrieNode<T>());
            node = node.children.get(c)!;
        }
        if (node.value === undefined) {
            node.value = value;
            this.n++;
        }
    }

    lookup(key: string): boolean {
        let node: TrieNode<T> = this.root;
        for (let c of key) {
            if (!node.children.has(c)) return false;
            node = node.children.get(c)!;
        }
        return node.value !== undefined;
    }

    *prefixSearch(prefix: string): Generator<[string, T]> {
        let node: TrieNode<T> = this.root;
        for (let c of prefix) {
            if (!node.children.has(c)) return;
            node = node.children.get(c)!;
        }
        yield* this.collectAll(node, prefix);
    }

    private *collectAll(
        node: TrieNode<T>,
        prefix: string,
    ): Generator<[string, T]> {
        if (node.value !== undefined) yield [prefix, node.value];
        for (let [char, child] of node.children) {
            yield* this.collectAll(child, prefix + char);
        }
    }

    get size(): number {
        return this.n;
    }

    reduce<U>(f: (accumulator: U, currentValue: T) => U, initialValue: U): U {
        return this.reduceRecursive(this.root, f, initialValue);
    }
    private reduceRecursive<U>(
        node: TrieNode<T>,
        f: (accumulator: U, currentValue: T) => U,
        acc: U,
    ): U {
        if (node.value !== undefined) acc = f(acc, node.value);
        for (const child of node.children.values())
            acc = this.reduceRecursive(child, f, acc);

        return acc;
    }
}

const r = new Trie<number>();

r.insert("altro", 1);
r.insert("casa", 2);
r.insert("caso", 3);
r.insert("cosa", 4);
r.insert("al", 5);
r.insert("co", 6);

console.log(r.size);

console.log(r.lookup("caso"));
console.log(r.lookup("al"));
console.log(r.lookup("altr"));
console.log(r.lookup("c"));
console.log(r.lookup("abc"));
console.log(r.lookup("k"));
console.log(r.lookup("cosat"));
console.log(r.lookup("cast"));

for (const s of r.prefixSearch("ca")) {
    console.log(s);
}

console.log(r.reduce((acc: number, x: number) => acc + x, 0));

console.log();
