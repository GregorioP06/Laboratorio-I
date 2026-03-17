class TreeNode {
    value: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;

    constructor(val: number) {
        this.value = val;
    }

    insertLeft(value: number): void {
        if (this.left === null) this.left = new TreeNode(value);
        else this.left.insertLeft(value);
    }

    insertRight(value: number): void {
        if (this.right === null) this.right = new TreeNode(value);
        else this.right.insertRight(value);
    }

    isLeaf(): boolean {
        return this.left === null && this.right === null;
    }

    minmax(): [number, number] {
        let min: number = this.value;
        let max: number = this.value;

        if (this.left) {
            const [minSx, maxSx] = this.left.minmax();
            if (minSx < min) min = minSx;
            if (maxSx > max) max = maxSx;
        }
        if (this.right) {
            const [minDx, maxDx] = this.right.minmax();
            if (minDx < min) min = minDx;
            if (maxDx > max) max = maxDx;
        }

        return [min, max];
    }

    count(): number {
        let count = 1;
        if (this.left) count += this.left.count();
        if (this.right) count += this.right.count();
        return count;
    }
}
