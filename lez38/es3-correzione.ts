class TrieNode {
    children: Map<string, TrieNode> = new Map<string, TrieNode>();
    isTerminal: boolean = false;
}

class Trie {
    private root: TrieNode;
    private n: number;

    constructor() {
        this.root = new TrieNode();
        this.n = 0;
    }

    insert(key: string): void {
        let node: TrieNode = this.root;
        for (let c of key) {
            if (!node.children.has(c)) node.children.set(c, new TrieNode());
            node = node.children.get(c)!;
            /*
            https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-
            Non-null Assertion Operator (Postfix !)

            TypeScript also has a special syntax for removing null and undefined
            from a type without doing any explicit checking.
            Writing ! after any expression is effectively a type assertion
            that the value isn’t null or undefined.

            Just like other type assertions, this doesn’t change
            the runtime behavior of your code, so it’s important to
            only use ! when you know that the value can’t be null or undefined.
            */
        }
        if (!node.isTerminal) {
            node.isTerminal = true;
            this.n++;
        }
    }

    lookup(key: string): boolean {
        let node: TrieNode = this.root;
        for (let c of key) {
            if (!node.children.has(c)) return false;
            node = node.children.get(c)!;
        }
        return node.isTerminal;
    }

    *prefixSearch(prefix: string): Generator<string> {
        let node: TrieNode = this.root;
        for (let c of prefix) {
            if (!node.children.has(c)) return;
            node = node.children.get(c)!;
        }
        yield* this.collectAll(node, prefix);
    }

    private *collectAll(node: TrieNode, prefix: string): Generator<string> {
        if (node.isTerminal) yield prefix;
        for (let [char, child] of node.children) {
            yield* this.collectAll(child, prefix + char);
        }
    }

    get size(): number {
        return this.n;
    }
}

const r = new Trie();

r.insert("altro");
r.insert("casa");
r.insert("caso");
r.insert("cosa");
r.insert("al");
r.insert("co");

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

console.log();
