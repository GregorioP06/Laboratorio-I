// funziona ma fa schifo

class Trie {
    root = new Node("");
    #size = 0;

    get size() {
        return this.#size;
    }

    insert(key: string): void {
        let current = this.root;

        while (key !== "") {
            if (current.children) {
                let flag = false;
                for (const node of current.children) {
                    if (node.char === key[0]) {
                        current = node;
                        key = key.slice(1);
                        flag = true;
                    }
                }
                if (!flag) {
                    if (current.children) {
                        current.children.push(this.#createNodesString(key));
                    } else {
                        current.children = [this.#createNodesString(key)];
                    }
                    return;
                }
            } else {
                current.children = [this.#createNodesString(key)];
                return;
            }
        }
        if (!current.flag) this.#size += 1;
        current.flag = true;
    }

    lookup(key: string): boolean {
        let current = this.root;
        while (key !== "") {
            if (!current.children) return false;
            let charFound = false;
            for (const node of current.children) {
                if (node.char === key[0]) {
                    current = node;
                    key = key.slice(1);
                    charFound = true;
                }
            }
            if (!charFound) return false;
        }
        return current.flag;
    }

    *prefixSearch(prefix: string): Generator<string> {
        let current = this.root;
        let originalPrefix = prefix;
        while (prefix !== "") {
            if (!current.children) return;
            let charFound = false;
            for (const node of current.children) {
                if (node.char === prefix[0]) {
                    current = node;
                    prefix = prefix.slice(1);
                    charFound = true;
                }
            }
            if (!charFound) return;
        }

        yield* this.#search(current, originalPrefix);
    }

    *#search(node: Node, str: string): Generator<string> {
        if (node.flag) yield str;
        if (node.children) {
            for (const child of node.children) {
                yield* this.#search(child, str + child.char);
            }
        }
    }

    #createNodesString(key: string) {
        const first = new Node(key[0]);

        let current = first;
        for (let i = 1; i < key.length; i++) {
            const child = new Node(key[i]);
            current.children = [child];
            current = child;
        }
        current.flag = true;

        return first;
    }
}

class Node {
    char: string;
    children: Node[] | null;
    flag: boolean = false;

    constructor(c: string, children: Node[] | null = null) {
        this.char = c;
        this.children = children;
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
