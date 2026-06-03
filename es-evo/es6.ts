interface Node {
    sx?: Node;
    dx?: Node;
    val: number;
    piccolo: number;
}

function contaMin(T: Node | undefined): number {
    if (!T) return Infinity;
    const sx = contaMin(T.sx);
    const dx = contaMin(T.dx);
    T.piccolo = Math.min(T.val, sx, dx);
    return T.piccolo;
}
