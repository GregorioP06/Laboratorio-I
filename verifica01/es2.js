function dronePiuVicino(a, p, epsilon) {
    let closest_distance = Infinity;
    let closest_drone = null;

    for (const drone of a) {
        // calcola la distanza tra il drone e il punto p
        const distance = Math.sqrt(
            (drone.x - p.x) ** 2 + (drone.y - p.y) ** 2 + (drone.z - p.z) ** 2
        );

        // controlla se la distanza calcolata è minore del minimo
        // e se la loro differenza non rientra nella soglia di tolleranza
        if (
            distance < closest_distance &&
            Math.abs(distance - closest_distance) >= epsilon
        ) {
            closest_distance = distance;
            closest_drone = drone;
        }
    }

    return closest_drone;
}
