function visitaFunzioni(tree, v) {
    // caso limite: v = undefined
    if (v == undefined) v = 0;
    if (tree) {
        // calcola il sottoalbero sx con il valore v
        const sx = visitaFunzioni(tree.sx, v);
        // applica la funzione di questo nodo al risultato del sottoalbero sx
        const centro = tree.val(sx);
        // ritorna il valore calcolato dal sottoalbero dx con il valore calcolato fino ad ora
        const dx = visitaFunzioni(tree.dx, centro);
        return dx;
    } else return v;
}
